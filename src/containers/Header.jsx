import { styled } from "styled-components"
import { IconBack } from "../assets/Icons"
import { TitleHeader} from "../blocks/SectionHeader"
import { DataCellsContext } from "../contexts/DataCellsContext";
import { useContext } from "react";

const Header = ({ className }) => {
  let { user, setUser } = useContext( DataCellsContext );
   return (user==="")
    ? ( 
        <header className={className}>        
                  <TitleHeader title={"People of Star Wars"}/>
        </header>
      )
    : ( 
        <header className={className}>
                  <div onClick={ (e) =>{ 
                    return setUser("")}}>
                    <IconBack />           
                  </div>          
                  <TitleHeader title={user}/>
        </header>
      )  
};


export default styled(Header)`
    background-color: var(--black);
    padding: 1.6rem;
    display: flex;
    flex-direction: row;  
    gap: 2rem;
    @media (min-width: 1024px) {
      h1 {
        text-align: left;
      }
      svg{
        display: none;
      }   
    }
`;