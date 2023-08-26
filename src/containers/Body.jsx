import { styled } from "styled-components"
import { NoticeCell } from "../blocks/NoticeCell"
import { SectionHeader } from "../blocks/SectionHeader"
import { PersonCell } from "../blocks/PersonCell"
import { DataCell } from "../blocks/DataCell"
import { LoadingCell } from "../blocks/LoadingCell"


const Body = ({ className }) => {
    return ( 
      <body className={className}>
          <LoadingCell></LoadingCell>
          <NoticeCell/>
          <PersonCell/>
          <PersonCell/>
          <SectionHeader/>
          <DataCell/>
      </body>
    );
};

export default styled(Body)`
    height: 100%;
    width: 100%;
`;