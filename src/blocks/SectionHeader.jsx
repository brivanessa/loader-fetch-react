import { styled } from "styled-components"
import { Title, SubtitleDefault } from "../elements/Titles"

const TitleContainer = styled.div`
    width: 100%;
    heigth: 100%;
`
const SubtitleContainer = styled.div`
    padding: 3.2rem 1.6rem  0.8rem;
`
export const TitleHeader = () => {
    return ( 
      <TitleContainer>
            <Title>
                People of Star Wars
            </Title>
      </TitleContainer>
    );
};

export const SectionHeader = () => {
    return ( 
      <SubtitleContainer>
            <SubtitleDefault>
                General Information
            </SubtitleDefault>
      </SubtitleContainer>
    );
};
