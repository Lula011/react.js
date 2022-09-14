
import NavBar from "./components/NavBar"
import ItemCount from "./components/NavBar/ItemCount";
import ItemListContainer from './components/NavBar/ItemListContainer'
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <ItemDetailContainer />

    </div>
  );
}

export default App;