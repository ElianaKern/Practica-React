import { useState } from 'react';
import '../styles/Formulario.css';
import Tarjetas from './Tarjetas';

const Formulario = () => {
  const [valorInputUrl, setValorInputUrl] = useState('');
  const [valorSelect, setValorSelect] = useState("");
  const [valorRadio, setValorRadio] = useState("");
  const [mostrarTarjeta, setMostrarTarjeta] = useState("ocultar")

  const handleChangeUrl = (e) => {
    setValorInputUrl(e.target.value);
    console.log(valorInputUrl)
  };
  const handleChangeSelect = (e) => {
    setValorSelect(e.target.value);
    console.log(valorSelect)
  }
  const handleChangeRadio = (e) => {
    setValorRadio(e.target.value);
    console.log(valorRadio)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   setMostrarTarjeta("mostrar")
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ingresa una URL
        <input onChange={handleChangeUrl} type="text" name="url"></input>
        {/* http://placekitten.com/300/300 */}
      </label>
      <label>
        Selecciona el Color de Pelo
        <select onChange={handleChangeSelect}>
          <option value="amarillo">Amarillo</option>
          <option value="blanco">Blanco</option>
          <option value="negro">Negro</option>
          <option value="tricolor">Tricolor</option>
        </select>
      </label>
      <label>
        Selecciona el Sexo
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="masc"
          value="masculino"
        />
        Masculino
        <input
          onChange={handleChangeRadio}
          type="radio"
          name="fem"
          value="femenino"
        />
        Femenino
      </label>
      <input type="submit" value="Enviar"></input>
      <div className= {mostrarTarjeta}>
        <Tarjetas
          url={valorInputUrl}
          colorPelo={valorSelect}
          sexo={valorRadio}
        />
      </div>
    </form>
  );
};

export default Formulario;
