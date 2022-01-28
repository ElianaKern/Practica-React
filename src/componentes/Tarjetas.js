import "../styles/Tarjetas.css"

const Tarjetas = ({url, colorPelo, sexo}) => {
    return(
        <div className="tarjeta">
            <div className="contenedor-imagen"><img src={url}></img></div>
            <p>El color de pelo de su gato es {colorPelo}</p>
            <p>Su sexo es {sexo}</p>
        </div>
    )
}
export default Tarjetas;