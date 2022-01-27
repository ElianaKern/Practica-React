import { useState } from 'react';
import '../styles/Formulario.css';
import Tarjetas from './Tarjetas';

const [valorInputUrl, setValorInputUrl] = useState('');
const handleChangeUrl = (e) => {
  setValorInputUrl(e.target.value);
  console.log(valorInputUrl);
};






const Formulario = () => {
  return (
    <form>
      <label>
        Ingresa una URL
        <input onChange={handleChangeUrl} type="text" name="url"></input>
      </label>
      <label>
        Selecciona el Color de Pelo
        <select>
          <option value="amarillo">Amarillo</option>
          <option value="blanco">Blanco</option>
          <option value="negro">Negro</option>
          <option value="tricolor">Tricolor</option>
        </select>
      </label>
      <label>
        Selecciona el Sexo
        <input tipe="radio" name="masc">
          Masculino
        </input>
        <input tipe="radio" name="fem">
          Femenino
        </input>
      </label>
      <input type="submit" value="Enviar"></input>
    </form>
  );
};

export default Formulario;
