import { useEffect, useState } from "react";
import mockApi from "../helpers/mockApi.js";
import { PersonCell } from "../blocks/PersonCell";
import {
    peopleAll,
    filterDataName,
    filterDataGender
  }  from "../helpers/data.js";

  const data = mockApi.results;
  const allPeople = peopleAll(data);

 export const PersonCells = ({}) => {
    let [personCells, setPersonCells] = useState([]);
    useEffect(()=> {
        // Hacer fetch
        // Actualizar la data
         setPersonCells(allPeople);
        //   setPersonCells(allPeople)
    },[]);

    return (
        <div>
            { personCells.map (
                (data) =>
                     <div key={data.name}>
                         <PersonCell name={data.name} gender={data.gender}/>
                     </div> 
                    )
            }          
        </div>
    )
};
