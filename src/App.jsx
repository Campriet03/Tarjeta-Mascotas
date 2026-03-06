import Mascotas from "./data/Mascotas.js";
import './App.css'
import Tarjeta_mascota from './Components/Tarjeta_mascota'

function App() {

  return (
    <>
    <div className="App">
      <h1>Adopta una mascota</h1>
      <div className="tarjetas-container">
        {Mascotas.map((mascota) => (
          <Tarjeta_mascota
            key={mascota.id}
            nombre={mascota.nombre}
            tipo={mascota.especie}
            raza={mascota.raza}
            edad={mascota.edad}
            peso={mascota.peso}
            vacunado={mascota.vacunado}
            imagen={mascota.imagen}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
