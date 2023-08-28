import { createContext, useEffect, useState } from "react";
// import mockApi from "../helpers/mockApi.js";

import {
    filterDataByName,
  }  from "../helpers/data.js";

export const DataCellsContext = createContext({});

export const DataCellsProvider = ({ children }) => {

    const [loadingCell, setLoadingCell] = useState(true);
    const [noticeCell, setNoticeCell] = useState(false);

    const [user, setUser] = useState("");
    const [page, setPage] = useState(3);
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setDataVehiculesCells] = useState([]);
    const [personCells, setPersonCells] = useState([]);


    useEffect(()=> {

        let promiseLoop = [];
        setNoticeCell(false)
        for (let i = 0; i < page; i++){
          promiseLoop[i] = fetch(`https://swapi.dev/api/people/?page=${i+1}`)
          .then(res => res.json())
        }
     
        Promise.all(promiseLoop)
        .then(values => {
           setLoadingCell(false)
           const dataAll= values.flatMap(value => [...value.results]);
           setPersonCells(dataAll)
        })
        .catch(error => 
          {
            setLoadingCell(false)
            setNoticeCell(true)
          }
          )
        ;

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