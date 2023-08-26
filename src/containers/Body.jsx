import { styled } from "styled-components"
import { NoticeCell } from "../blocks/NoticeCell"
import { SectionHeader } from "../blocks/SectionHeader"
import { DataCell } from "../blocks/DataCell"
import { LoadingCell } from "../blocks/LoadingCell"
import { PersonCells } from "./PersonCells"


const Body = ({ className }) => {
    return ( 
      <section className={className}>
          <LoadingCell></LoadingCell>
          <NoticeCell/>
          <PersonCells/>
          <SectionHeader/>
          <DataCell/>
      </section>
    );
};

export default styled(Body)`
    height: 100%;
    width: 100%;
`;
