
import NavBar from "./components/NavBar"
import ItemListContainer from './components/NavBar/ItemListContainer'
import ItemDetailContainer from "./components/NavBar/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartWidget from "./components/NavBar/CartWidget";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;