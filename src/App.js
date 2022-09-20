
import NavBar from "./components/NavBar"
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