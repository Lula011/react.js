
import NavBar from "./components/NavBar"
import ItemListContainer from './components/NavBar/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer car={321} />
    </div>
  );
}

export default App;