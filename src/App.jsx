import './App.css'
import Boton from './Components/Boton'
import BotonClear from './Components/BotonClear'
import Pantalla from './Components/Pantalla'
import { useState } from 'react'
import { evaluate } from 'mathjs'
import Swal from 'sweetalert2'

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val =>{
    if (!input && esOperador(val)) {
      setInput('0' + val);
    } else if (esOperador(val) && esOperador(input.charAt(input.length - 1))) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };

  const esOperador = (caracter) => {
    return ['+', '-', '*', '/'].includes(caracter);
  };

  const calcularResultado = () =>{
    if (input){
      setInput(evaluate(input).toFixed(4).replace(/\.0+$/, ''))
    }else{
      Swal.fire('Por favor ingrese valores para realizar los cálculos')

    }
  };

  return (
    <div className="App">
      <div className='contenedor'>
        <h1>CALCULATOR</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado }>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clean</BotonClear>
        </div>
      </div>
      <div>
        <p>─ Developed by Jhair Tirado Atalaya ─</p>
      </div>
    </div>
  )
}

export default App
