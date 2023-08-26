import { styled } from "styled-components"
import {  SubtitleDefault } from "../elements/Titles"
import {  SubtitleLowEmphasis } from "../elements/Titles"
import {  StyledCell } from "../elements/StyledCell"

const DataCellContainer = styled.div`
    ${StyledCell};
    gap: 1.6rem;
    
    div{
        display: flex;
        flex-direction: column;  
        width: 50%;
    }
    div:last-child{
        display: flex;
        align-items: flex-end;
    }
`
export const DataCell = ({characteristic, value})  => {
    return ( 
      <DataCellContainer>
            <div>
                <SubtitleLowEmphasis>
                    {characteristic}
                </SubtitleLowEmphasis>
            </div>
            <div >
                <SubtitleDefault>
                    {value}
                </SubtitleDefault>
            </div>
      </DataCellContainer>
    );
};


