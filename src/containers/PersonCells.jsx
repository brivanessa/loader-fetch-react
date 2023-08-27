import { useContext } from "react";
import { DataCellsContext } from "../contexts/DataCellsContext";
import { PersonCell } from "../blocks/PersonCell";

 export const PersonCells = ({}) => {
    let { personCells, setUser } = useContext( DataCellsContext );
        return (
            <div >
                { personCells.map (
                    (data) =>
                         <div key={data.name} onClick={ (e) =>{
                            const username = data.name;
                            return setUser(username);
                         }} >
                             <PersonCell name={data.name} gender={data.gender}/>
                         </div> 
                        )
                }          
            </div>
        )

};
