import { styled } from "styled-components"
import { IconBack } from "../assets/Icons"
import { TitleHeader} from "../blocks/SectionHeader"

const Header = ({ className }) => {
    return ( 
      <header className={className}>
        <IconBack/>
        <TitleHeader/>
      </header>
    );
};


export default styled(Header)`
    background-color: var(--black);
    padding: 1.6rem;
    display: flex;
    flex-direction: row;  
    gap: 2rem;
`;