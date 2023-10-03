import React, { useState } from "react";
import { Controller, useForm} from 'react-hook-form'
const App= ()=> {
    const {register,handleSubmit,formState:{errors}} =useForm()
    const customSubmit =(data)=>{
        console.log(data)
        console.log("Turno generado con éxito")
    
    }

    return (
      <form onSubmit={ handleSubmit(customSubmit)} className="Formulario">
        {/*Titulo*/}
        <h1>Ticket de Turno</h1>
        {/*Nombre Completo*/}
        <div className="campo1">
        <label htmlFor="nombreComp">Nombre completo de quien realizará el trámite:</label>
        <input type="text" {...register('nombreComp',{
          required:{
            value:true,
            message: " Nombre completo es obligatorio"
          },
          minLength:{
            value:10,
            message: "El nombre debe tener al menos 10 caracteres"
          },
          maxLength:{
            value:40,
            message:"Nombre debe tener menos de 40 caracteres "
          }
          })}></input>
        {errors.nombreComp  && <span>{errors.nombreComp.message}</span>}
    

        {/*Curp*/}
        <label htmlFor="curp">CURP:</label>
        <input type="text"  {...register('curp',{
         required:{
          value:true,
          message:"CURP es Obligatorio"
        },
        pattern:{
          value:/^[A-Z]{4}[0-9]{6}[H,M][A-Z]{5}[0-9]{2}$/i,
          message: "CURP no es válido"
        }
        })}></input>
        {errors.curp && <span>{errors.curp.message}</span>}
        </div>
        <div className="campo2">
          {/*Nombre*/}
        <label htmlFor="nombre">Nombre:</label>
        <input type="text"  {...register('nombre',{
           required:{
            value:true,
            message: "Nombre es obligatorio"
          },
          minLength:{
            value:3,
            message: "El nombre debe tener mas de un caracter"
          }
        })}></input>
        {errors.nombre && <span>{errors.nombre.message}</span>}
        {/*Paterno*/}
        <label htmlFor="paterno">Paterno:</label>
        <input type="text"  {...register('paterno',{
           required:{
            value:true,
            message: " apellido paterno es obligatorio"
          },
          minLength:{
            value:3,
            message: "El apellido paterno debe tener al menos 3 caracteres"
          }
        })}
        ></input>
        {errors.paterno && <span>{errors.paterno.message}</span>}
        {/*Materno*/}
        <label htmlFor="materno">Materno:</label>
        <input type="text"  {...register('materno',{
          required:{
            value:true,
            message: "apellido Materno es obligatorio"
          },
          minLength:{
            value:3,
            message: "El apellido materno debe tener al menos 3 caracteres"
          }
        })}
        ></input>
        {errors.materno && <span>{errors.materno.message}</span>}
        </div>  
        <div className="campo3">
          {/*Telefono*/}
        <label htmlFor="telefono">Telefono:</label>
        <input type="text"  {...register('telefono',{
          required:{
            value:true,
            message: "Número de Telefono es Obligatorios"
          },pattern:{
            value: /^[0-9]{10}$/, // Expresión regular para 10 dígitos numéricos
            message: 'El número de telefono debe tener 10 dígitos numéricos'
          }
        })}
       ></input>
       {errors.telefono && <span>{errors.telefono.message}</span>}
        {/*Celular*/}
        <label htmlFor="celular">Celular:</label>
        <input type="text"  {...register('celular',{
          required:{
            value:true,
            message:'Numero de celular es obligatorio'
          },
          pattern:{
            value: /^[0-9]{10}$/, // Expresión regular para 10 dígitos numéricos
            message: 'El número de celular debe tener 10 dígitos numéricos'
          }
        })}
        ></input>
        {errors.celular && <span>{errors.celular.message}</span>}
        {/*Correo*/}
        <label htmlFor="correo">Correo:</label>
        <input type="text"  {...register('correo',{
          required:{
            value:true,
            message:"Correo es Obligatorio"
          },
          pattern:{
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "El correo no es válido"
          }
        })}
        ></input>
        {errors.correo && <span>{errors.correo.message}</span>}
        </div>
        <div className="campo4">
           {/*Nivel de estudios*/}
        <label htmlFor="nivelEstudios">¿Nivel al que desea ingresar o que ya cursa el alumno?</label>
        <select 
         id="nivelEstudios" name="nivelEstudios"  {...register('nivelEstudios',{
          required:true,
          validate:(value) => value !== "" || "Selecciona una opción válida"
         })}>
           <option value="">Selecciona una opción </option> 
          <option value="1er Grado">1er Grado</option>
          <option value="2do Grado">2do Grado</option>
          <option value="3er Grado">3er Grado</option>
          <option  value="4to Grado">4to Grado</option>
          <option value="5to Grado">5to Grado</option>
          <option value="6to Grado">6to Grado</option>
        </select>
        {errors.nivelEstudios && <span>{errors.nivelEstudios.message}</span>}
        </div>
        <div className="campo5">
        {/*Muinicipio*/}
         <label htmlFor="municipio">Municipio donde desea estudie el alumno:</label>
        <select 
        id="municipio" name="municipio"  {...register('municipio',{
          required:true
        })}>
          <option value="">Seleccione una opción</option>
          <option value="Saltillo">Saltillo</option>
          <option  value="Arteaga">Arteaga</option>
          <option value="Torreón">Torreon</option>   
      </select>
    
        {errors.municipio && <span>{errors.municipio.message}</span>} 

        </div> 

        <div className="campo6">
         {/*Muinicipio*/}
         <label htmlFor="asunto">Seleccione el asunto que va a tratar:</label>
         <select 
          
         id="asunto" name="asunto"  {...register('asunto',{
          required:true
         })}>
          <option value="">Seleccione una opción</option>
          <option value="Inscripción">Inscripción</option>
          <option value="Cambio de Escuela">Cambio de Escuela</option>
          <option value="Dar de baja">Dar de baja</option>
        </select>
        {errors.asunto && <span>{errors.asunto.message}</span>} 
        </div>
        <button className="boton" type="submit">Generar Turno</button>
       
      </form>
    );
  }
  
  export default App;