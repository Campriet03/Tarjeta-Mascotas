function Tarjeta_mascota({nombre, tipo, raza, edad, peso, vacunado, imagen}) {
    return (
        <div className="tarjeta-mascota">
            <img src={imagen} alt={nombre} className="imagen" />
            <div className="contenido">
                <h2>{nombre}</h2>
                <p>{tipo}</p>
                <p>raza: {raza}</p>
                <p>{edad} años</p>
                <p>Peso: {peso} kg</p>
                <p>Vacunado: {vacunado ? 'Sí' : 'No'}</p>

                <button className="boton">Ver detalles</button>
            </div>
        </div>
    );
}

export default Tarjeta_mascota