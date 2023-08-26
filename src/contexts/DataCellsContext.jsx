import { createContext, useEffect, useState } from "react";
import mockApi from "../helpers/mockApi.js";

import {
    peopleAll,
    filterDataByName,
  }  from "../helpers/data.js";

// {username: "name", DataCells:[]}
export const DataCellsContext = createContext({});

// export const DataCellsProvider = ({ children }) => {

//     const data = mockApi.results;
//     const allPeople = peopleAll(data);
 
//     const [user, setUser] = useState("C-3PO");
//     const [dataCells, setDataCells] = useState([]);
//     const [dataVehiculesCells, setDataVehiculesCells] = useState([]);

//     const filterData = filterDataName(allPeople, user )
//     const filterVehicules = filterVehiculesDataName(allPeople, user )

//    useEffect(()=> {
//         setDataCells(filterData);
//         setDataVehiculesCells(filterVehicules);

//    },[]);

//     return (
//         <DataCellsContext.Provider
//          value={ { username:user, dataCells:dataCells, dataVehiculesCells:dataVehiculesCells } }
//         >
//             {children}
//         </DataCellsContext.Provider>
//     )
// };

export const DataCellsProvider = ({ children }) => {

  
    const [user, setUser] = useState("");
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setDataVehiculesCells] = useState([]);
    const [personCells, setPersonCells] = useState([]);

    const data = mockApi.results;
    const allPeople = peopleAll(data);
    const filterData =  filterDataByName(allPeople, user )
    const filterVehicules =  filterDataByName(allPeople, user, "yes")

    useEffect(()=> {
        setDataCells(filterData);
        setDataVehiculesCells(filterVehicules);
        setPersonCells(allPeople);
   },[user, setUser]);

    return (
        <DataCellsContext.Provider
         value={ { user:user, dataCells:dataCells, dataVehiculesCells:dataVehiculesCells, personCells:personCells, setUser:setUser } }
        >
            {children}
        </DataCellsContext.Provider>
    )
};