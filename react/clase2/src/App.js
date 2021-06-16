import React, { useState } from 'react';
import Header from './components/header/Header';
import Registro from './components/Registro';
import Listado from './components/Listado';
import './App.css';
const App = () => {
  const [usuarios, setUsuarios] = useState([]); //array de varios objetos usuario
  const agregarUsuarios = (usuario) => {
    setUsuarios([...usuarios,usuario]);
  }
  return (
    <div className="container-fluid bg-dark text-white alturaMax">
      <Header />
      <div className="row mt-5 justify-content-center">
        <div className="col-5">
          <Registro agregarUsuarios = {agregarUsuarios}/>
        </div>
        <div className="col-5">
          <Listado usuarios = {usuarios} /> 
        </div>
   </div>
   </div>
  );
}

export default App;
