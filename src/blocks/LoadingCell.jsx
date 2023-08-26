import { styled } from "styled-components"
import { SubtitleLowEmphasis } from "../elements/Titles"
import { Loader } from "../elements/Loader"


const LoadingCellContainer = styled.div`
    padding: 1.6rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap:0.8rem;
`
export const LoadingCell = () => {
    return ( 
      <LoadingCellContainer>
            <Loader></Loader>
            <SubtitleLowEmphasis>
                Loading
            </SubtitleLowEmphasis>

      </LoadingCellContainer>
    );
};


