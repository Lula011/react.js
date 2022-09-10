
import NavBar from "./components/NavBar"
import ItemCount from "./components/NavBar/ItemCount";
import ItemListContainer from './components/NavBar/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemCount />

    </div>
  );
}

export default App;