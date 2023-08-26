import { createContext, useEffect, useState } from "react";
import mockApi from "../helpers/mockApi.js";

import {
    peopleAll,
    filterDataByName,
  }  from "../helpers/data.js";

// {username: "name", DataCells:[]}
export const DataCellsContext = createContext({});

export const DataCellsProvider = ({ children }) => {

    // const [data, setData] = useState(mockApi.results);
    const [data, setData] = useState([]);
    const [user, setUser] = useState("");
    const [page, setPage] = useState(1);
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setDataVehiculesCells] = useState([]);
    const [personCells, setPersonCells] = useState([]);

    const allPeople = peopleAll(data);
    const filterData =  filterDataByName(allPeople, user )
    const filterVehicules =  filterDataByName(allPeople, user, "yes")

    useEffect(()=> {
        setPage(2)
        // setData(mockApi.results)
        setDataCells(filterData);
        setDataVehiculesCells(filterVehicules);
        setPersonCells(allPeople);

        // Hacer fetch
        fetchApi().then(answer => setData(answer.results))
       
        async function fetchApi(){
            let response = await fetch(`https://swapi.dev/api/people/?page=1`)
            return await response.json();
        }

   },[user, setUser]);

    return (
        <DataCellsContext.Provider
         value={ { user:user, dataCells:dataCells, dataVehiculesCells:dataVehiculesCells, personCells:personCells, setUser:setUser } }
        >
            {children}
        </DataCellsContext.Provider>
    )
};