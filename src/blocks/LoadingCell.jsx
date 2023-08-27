import { styled } from "styled-components"
import { SubtitleLowEmphasis } from "../elements/Titles"
import { Loader } from "../elements/Loader"
import { useContext } from "react";
import { DataCellsContext } from "../contexts/DataCellsContext";

const LoadingCellContainer = styled.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:0.8rem;
`
export const LoadingCell = () => {
    let { loadingCell, user,noticeCell } = useContext( DataCellsContext )
    if( loadingCell === true && user==="" && noticeCell===false) {
    return ( 
      <LoadingCellContainer>
            <Loader></Loader>
            <SubtitleLowEmphasis>
                Loading
            </SubtitleLowEmphasis>

      </LoadingCellContainer>
    );
}};

