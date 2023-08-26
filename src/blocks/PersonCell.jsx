import { styled } from "styled-components"
import {  SubtitleDefault } from "../elements/Titles"
import {  TextLowEmphasis } from "../elements/Text"
import {  IconDetails } from "../assets/Icons"
import {  StyledCell } from "../elements/StyledCell"

const PersonCellContainer = styled.div`
    ${StyledCell};
    
    div:first-child{
        padding: 0  1.6rem 0 0;
        display: flex;
        flex-direction: column;  
        width: 100%;
    }

    div:last-child{
        padding: 0rem 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center
    }
`
export const PersonCell = () => {
    return ( 
      <PersonCellContainer>
            <div >
                <SubtitleDefault>
                    Luke Skywalker
                </SubtitleDefault>
                <TextLowEmphasis>
                    Human from Tatooine
                </TextLowEmphasis>
            </div>
            <div>
            < IconDetails/>
            </div>
      </PersonCellContainer>
    );
};


