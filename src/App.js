import Layout from "./containers/Layout";
import Header from "./containers/Header";
import Body from "./containers/Body";
import {DataCellsProvider} from "./contexts/DataCellsContext"
function App() {
  return (
    <DataCellsProvider>
      <Layout>
        <Header/>
        <Body/>
      </Layout>
    </DataCellsProvider>

  );
}

export default App;
