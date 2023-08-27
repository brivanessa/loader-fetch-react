import { styled } from "styled-components"
import { SubtitleHighEmphasis } from "../elements/Titles"
import { useContext } from "react";
import { DataCellsContext } from "../contexts/DataCellsContext";

const SubtitleContainer = styled.div`
    padding: 1.6rem;
    display: flex;
    justify-content: center;
`
export const NoticeCell = () => {
    let { noticeCell, user } = useContext( DataCellsContext )
    if( noticeCell === true && user==="") {
    return ( 
      <SubtitleContainer>
            <SubtitleHighEmphasis>
                Failed to Load Data
            </SubtitleHighEmphasis>
      </SubtitleContainer>
    );
} };


