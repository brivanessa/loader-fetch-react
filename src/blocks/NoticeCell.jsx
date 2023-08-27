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
    let { noticeCell } = useContext( DataCellsContext )
    if( noticeCell === true) {
    return ( 
      <SubtitleContainer>
            <SubtitleHighEmphasis>
                Failed to Load Data
            </SubtitleHighEmphasis>
      </SubtitleContainer>
    );
} };


