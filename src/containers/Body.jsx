import { styled } from "styled-components"
import { NoticeCell } from "../blocks/NoticeCell"
import { DataCells } from "./DataCells"
import { LoadingCell } from "../blocks/LoadingCell"
import { PersonCells } from "./PersonCells"


const Body = ({ className }) => {
    return ( 
      <section className={className}>
          <LoadingCell/>
          <NoticeCell/>
          <PersonCells/>
          <DataCells/>
      </section>
    );
};

export default styled(Body)`
    height: 100%;
    width: 100%;
`;
