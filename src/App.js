
const personas = [
  {
    "nombre": "Juan",
    "edad": 39
  },
  {
    "nombre": "Laura",
    "edad": 23
  },
]



const App = () => {
  return (
    <div className="App">
      <h1>Clase React 1ra entrega</h1>
      {
        personas.map(persona => (
          <div><p>Nombre: {persona.nombre}</p>
            <p>Edad: {persona.edad}</p>
          </div>
        ))
      }
    </div>
  );
}

export default App;
