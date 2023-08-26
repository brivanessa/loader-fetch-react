import { useEffect, useState } from "react";
import mockApi from "../helpers/mockApi.js";
import { DataCell } from "../blocks/DataCell";
import { SectionHeader } from "../blocks/SectionHeader";

import {
    peopleAll,
    filterDataName,
    filterVehiculesDataName,
  }  from "../helpers/data.js";

  const data = mockApi.results;
  const allPeople = peopleAll(data);
  const filterData = filterDataName(allPeople, "Luke Skywalker" )
  const filterVehicules = filterVehiculesDataName(allPeople, "Luke Skywalker" )

 export const DataCells = () => {
    const [dataCells, setDataCells] = useState([]);
    const [dataVehiculesCells, setVehiculesDataCells] = useState([]);

    useEffect(()=> {
        setDataCells(filterData);
        setVehiculesDataCells(filterVehicules)
    },[]);
    return (
        <section>
            <SectionHeader subtitle={"General Information"} />
            {console.log(dataCells)}
            <div key={dataCells.name}>
                <DataCell characteristic={"Eye Color"} value={dataCells.eye_color}/>
                <DataCell characteristic={"Hair Color"} value={dataCells.hair_color}/>
                <DataCell characteristic={"Skin Color"} value={dataCells.skin_color}/>
                <DataCell characteristic={"Birth Year"} value={dataCells.birth_year}/>
            </div> 
                   
     
            <SectionHeader subtitle={"Vehicles"} />
            <div>
                {console.log(filterVehicules)}
                { dataVehiculesCells.map (
                    (item) =>
                        <div key={item}>
                            <DataCell characteristic={item}/>
                        </div> 
                        )
                }          
            </div>
        </section>
    
    )
};
