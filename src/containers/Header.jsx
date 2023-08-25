import { Title } from "../elements/Titles"
import { styled } from "styled-components";


const Header = ({ className }) => {
    return ( 
      <header className={className}>
        <Title>
            People of Star Wars
        </Title>
      </header>
    );
};


export default styled(Header)`
    background-color: var(--black);
    padding: 1.6rem 0.8rem;
`;