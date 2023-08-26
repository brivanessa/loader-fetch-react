import { useContext, useEffect, useState } from "react";
import { DataCellsContext } from "../contexts/DataCellsContext";
import { DataCell } from "../blocks/DataCell";
import { SectionHeader } from "../blocks/SectionHeader";

 export const DataCells = () => {

    let { dataCells } = useContext( DataCellsContext )
    let { dataVehiculesCells } = useContext(DataCellsContext)

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
                {console.log(dataVehiculesCells)}
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
