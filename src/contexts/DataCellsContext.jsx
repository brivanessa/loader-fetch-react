import { createContext, useEffect, useState } from "react";
import mockApi from "../helpers/mockApi.js";

import {
    peopleAll,
    filterDataName,
    filterVehiculesDataName,
  }  from "../helpers/data.js";

// {username: "name", DataCells:[]}
export const DataCellsContext = createContext({});

export const DataCellsProvider = ({ children }) => {

    const data = mockApi.results;
    const allPeople = peopleAll(data);
 
    const [user, setUser] = useState("C-3PO");
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setDataVehiculesCells] = useState([]);

    const filterData = filterDataName(allPeople, user )
    const filterVehicules = filterVehiculesDataName(allPeople, user )

   useEffect(()=> {
        setDataCells(filterData);
        setDataVehiculesCells(filterVehicules);

   },[]);

    return (
        <DataCellsContext.Provider
         value={ { username:user, dataCells:dataCells, dataVehiculesCells:dataVehiculesCells } }
        >
            {children}
        </DataCellsContext.Provider>
    )
};
