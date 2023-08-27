import { createContext, useEffect, useState } from "react";
// import mockApi from "../helpers/mockApi.js";

import {
    peopleAll,
    filterDataByName,
  }  from "../helpers/data.js";

// {username: "name", DataCells:[]}
export const DataCellsContext = createContext({});

export const DataCellsProvider = ({ children }) => {

    const [loadingCell, setLoadingCell] = useState(false);
    const [noticeCell, setNoticeCell] = useState(false);

    const [user, setUser] = useState("");
    const [page, setPage] = useState(1);
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setDataVehiculesCells] = useState([]);
    const [personCells, setPersonCells] = useState([]);

    useEffect(()=> {
        setPage(2);
        // Hacer fetch
        fetchApi()
        .then(answer =>  {
            if(answer){
                setPersonCells(peopleAll(answer.results))
            }
        })
        async function fetchApi(){
            try {
                setLoadingCell(true);
                const response = await fetch(`https://swapi.dev/api/people/?page=1`)
                setLoadingCell(false);
                return await response.json();
            } catch(error){
                console.log(error)
                setNoticeCell(true)
            }
        }

        fetchApi();
         setDataCells(filterDataByName(personCells, user ));
         setDataVehiculesCells( filterDataByName(personCells, user, "yes"));

        },[user]);
        return (
            <DataCellsContext.Provider
            value={{ user:user,  setUser:setUser, personCells:personCells, dataCells:dataCells, dataVehiculesCells:dataVehiculesCells,  loadingCell:loadingCell, noticeCell:noticeCell}}
            >
                {children}
            </DataCellsContext.Provider>
        )
};