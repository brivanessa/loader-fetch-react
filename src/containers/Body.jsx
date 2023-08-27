import { styled } from "styled-components"
import { NoticeCell } from "../blocks/NoticeCell"
import  DataCells  from "./DataCells"
import { LoadingCell } from "../blocks/LoadingCell"
import { PersonCells } from "./PersonCells"
import { DataCellsContext } from "../contexts/DataCellsContext";
import { useContext } from "react";

const DataSection = styled.div`
    // height:100%;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 2fr;

    }  
`
const DataPeople = styled.div`
        height:100%;
        display: none;
        @media (min-width: 1024px) {
            display: block;

        }  
`
const Body = ({ className }) => {
    let { user, } = useContext( DataCellsContext );
    return (user ==="" )
    ?( 
        <section className={className}>
          
            <DataSection>
                <LoadingCell/>
                <NoticeCell/>
                <PersonCells/>
                <DataCells/>
            </DataSection>
        </section>
    )
    :( 
             <section className={className}>
             <DataSection>
                 <DataPeople>
                     <PersonCells/>
                 </DataPeople>
                 <DataCells/>
             </DataSection>
         
           </section>
    );
};

export default styled(Body)`
    height: 100%;
    width: 100%; 
`;
