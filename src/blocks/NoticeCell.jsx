import { styled } from "styled-components"
import { SubtitleHighEmphasis } from "../elements/Titles"

const SubtitleContainer = styled.div`
    padding: 1.6rem;
    display: flex;
    justify-content: center;
`
export const NoticeCell = () => {
    return ( 
      <SubtitleContainer>
            <SubtitleHighEmphasis>
                Failed to Load Data
            </SubtitleHighEmphasis>
      </SubtitleContainer>
    );
};


