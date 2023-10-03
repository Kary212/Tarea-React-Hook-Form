import React from "react";
import { useForm } from 'react-hook-form'
const App= ()=> {
    const {register,handleSubmit} =useForm()

    const customSubmit =(data)=>{
        console.log(data)
    }

    return (
      <form onSubmit={ handleSubmit(customSubmit)} className="Formulario">
        {/*Titulo*/}
        <h1>Ticket de Turno</h1>
        {/*Nombre Completo*/}
        <div className="campo1">
        <label htmlFor="nombreComp">Nombre completo de quien realizará el trámite:</label>
        <input type="text" {...register('nombreComp')}
        ></input>
        {/*Curp*/}
        <label htmlFor="curp">CURP:</label>
        <input type="text"  {...register('curp')}
  
        ></input>
        </div>
        <div className="campo2">
          {/*Nombre*/}
        <label htmlFor="nombre">Nombre:</label>
        <input type="text"  {...register('nombre')}></input>
        {/*Paterno*/}
        <label htmlFor="paterno">Paterno:</label>
        <input type="text"  {...register('paterno')}
        ></input>
        {/*Materno*/}
        <label htmlFor="materno">Materno:</label>
        <input type="text"  {...register('materno')}
        ></input>
        </div>  
        <div className="campo3">
          {/*Telefono*/}
        <label htmlFor="telefono">Telefono:</label>
        <input type="text"  {...register('telefono')}
       ></input>
        {/*Celular*/}
        <label htmlFor="celular">Celular:</label>
        <input type="text"  {...register('celular')}
        ></input>
        {/*Correo*/}
        <label htmlFor="correo">Correo:</label>
        <input type="text"  {...register('correo')}
        ></input>
        </div>
        <div className="campo4">
           {/*Nivel de estudios*/}
        <label htmlFor="nivelEstudios">¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
        <select 
         id="nivelEstudios" name="nivelEstudios"  {...register('nivelEstudios')}>
          <option value="1er Grado">1er Grado</option>
          <option value="2do Grado">2do Grado</option>
          <option value="3er Grado">3er Grado</option>
          <option  value="4to Grado">4to Grado</option>
          <option value="5to Grado">5to Grado</option>
          <option value="6to Grado">6to Grado</option>
        </select>
        </div>
        <div className="campo5">
        {/*Muinicipio*/}
        <label htmlFor="municipio">Municipio donde desea estudie el alumno:</label>
        <select 
        id="municipio" name="municipio"  {...register('municipio')}>
          <option value="Saltillo">Saltillo</option>
          <option  value="Arteaga">Arteaga</option>
          <option value="Torreón">Torreon</option>   
        </select>
        </div>
        <div className="campo6">
         {/*Muinicipio*/}
         <label htmlFor="asunto">Seleccione el asunto que va a tratar:</label>
         <select 
          
         id="asunto" name="asunto"  {...register('asunto')}>
          <option value="Inscripción">Inscripción</option>
          <option value="Cambio de Escuela">Cambio de Escuela</option>
          <option value="Dar de baja">Dar de baja</option>
        </select>
        </div>
        <button className="boton" type="submit">Generar Turno</button>
       
      </form>
    );
  }
  
  export default App;