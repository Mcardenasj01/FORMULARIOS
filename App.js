import React, {useState} from "react";
import { useRef } from "react";
import {Formulario, Terminos, ContenedorBotonEnviar, Boton, MensajeExito, MensajeError, Titulos, GridTres, 
        GridDos, CDiecinueve, IIC, CVeintiuno, Finalizarenglon, CVeintidos} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Input from "./componentes/Input";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas'


const App = () => {
  const [municipio, cambiarMunicipio] = useState({campo: '', valido: null});
  const [codEstablecimiento, cambiarCodEstablecimiento] = useState({campo: '', valido: null});
  const [fechaMaxSinSancion, cambiarfechaMaxSinSancion] = useState({campo: '', valido: null});
  const [depto, cambiardepto] = useState({campo: '', valido: null});
  const [numFormulario, cambiarnumFormulario] = useState({campo: '', valido: null});
  const [anioGravable, cambiaranioGravable] = useState({campo: '', valido: null});
  const [numEmpleados, cambiarnumEmpleados] = useState({campo: '', valido: null});
  const [comprasAnual, cambiarcomprasAnual] = useState({campo: '', valido: null});
  const [estratoSocial, cambiarestratoSocial] = useState({campo: '', valido: null});
  const [areaNegocio, cambiarareaNegocio] = useState({campo: '', valido: null});
  const [, setPersona] = useState('natural');
  const [, setopcionUso] = useState('inicial');
  const [decCorreccion, cambiardecCorreccion] = useState({campo: '', valido: null});
  const [fechaActual, cambiarfechaActual] = useState({campo: '', valido: null});
  const [aUno, cambiaraUno] = useState({campo: '', valido: null});
  const [aTres, cambiaraTres] = useState({campo: '', valido: null});
  const [, setopcionIdentificacion] = useState('cedula');
  const [numCedula, cambiarnumCedula] = useState({campo: '', valido: null});
  const [digVerificacion, cambiardigVerificacion] = useState({campo: '', valido: null});
  const [munDireccion, cambiarmunDireccion] = useState({campo: '', valido: null});
  const [Adepartamento, cambiarAdepartamento] = useState({campo: '', valido: null});

  const [, setopcionSpi] = useState('1');
  const [, setopcionsancion] = useState('extemporanea');
  const [telefono, cambiartelefono] = useState({campo: '', valido: null});
  const [correo, cambiarcorreo] = useState({campo: '', valido: null});
  const [establecimientos, cambiarestablecimientos] = useState({campo: '', valido: null});
  const [clasifIVA, cambiarclasifIVA] = useState({campo: '', valido: null});
  const [ocho, cambiarocho] = useState({campo: '', valido: null});
  const [nueve, cambiarnueve] = useState({campo: '', valido: null});
  const [diez, cambiardiez] = useState({campo: '', valido: null});
  const [once, cambiaronce] = useState({campo: '', valido: null});
  const [doce, cambiardoce] = useState({campo: '', valido: null});
  const [trece, cambiartrece] = useState({campo: '', valido: null});
  const [catorce, cambiarcatorce] = useState({campo: '', valido: null});
  const [quince, cambiarquince] = useState({campo: '', valido: null});
  const [dieciseis, cambiardieciseis] = useState({campo: '', valido: null});
  const [diecisiete, cambiardiecisiete] = useState({campo: '', valido: null});
  const [dieciocho, cambiardieciocho] = useState({campo: '', valido: null});
  const [diecinueve, cambiardiecinueve] = useState({campo: '', valido: null});
  const [impIndustriaCom, cambiarimpIndustriaCom] = useState({campo: '', valido: null});
  const [totIngresoGravado, cambiartotIngresoGravado] = useState({campo: '', valido: null});
  const [veinte, cambiarveinte] = useState({campo: '', valido: null});
  const [promMes3, cambiarpromMes3] = useState({campo: '', valido: null});
  const [promMes2, cambiarpromMes2] = useState({campo: '', valido: null});
  const [promMes1, cambiarpromMes1] = useState({campo: '', valido: null});
  const [veintiuno, cambiarveintiuno] = useState({campo: '', valido: null});
  const [veintidos, cambiarveintidos] = useState({campo: '', valido: null});
  const [veintitres, cambiarveintitres] = useState({campo: '', valido: null});
  const [veinticuatro, cambiarveinticuatro] = useState({campo: '', valido: null});
  const [veinticinco, cambiarveinticinco] = useState({campo: '', valido: null});
  const [veintiseis, cambiarveintiseis] = useState({campo: '', valido: null});
  const [otrasancion, cambiarotrasancion] = useState({campo: '', valido: null});
  const [valorsancion, cambiarvalorsancion] = useState({campo: '', valido: null});
  const [veintiocho, cambiarveintiocho] = useState({campo: '', valido: null});
  const [veintinueve, cambiarveintinueve] = useState({campo: '', valido: null});
  const [treinta, cambiartreinta] = useState({campo: '', valido: null});
  const [treintayuno, cambiartreintayuno] = useState({campo: '', valido: null});
  const [treintaydos, cambiartreintaydos] = useState({campo: '', valido: null});
  const [treintaytres, cambiartreintaytres] = useState({campo: '', valido: null});
  const [treintaycuatro, cambiartreintaycuatro] = useState({campo: '', valido: null});
  const [treintaycinco, cambiartreintaycinco] = useState({campo: '', valido: null});
  const [treintayseis, cambiartreintayseis] = useState({campo: '', valido: null});
  const [treintaysiete, cambiartreintaysiete] = useState({campo: '', valido: null});
  const [treintayocho, cambiartreintayocho] = useState({campo: '', valido: null});
  const [treintaynueve, cambiartreintaynueve] = useState({campo: '', valido: null});
  const [cuarenta, cambiarcuarenta] = useState({campo: '', valido: null});
  const [cuarentayuno, cambiarcuarentayuno] = useState({campo: '', valido: null});
  const [cuarentaydos, cambiarcuarentaydos] = useState({campo: '', valido: null});
  const [cuarentaytres, cambiarcuarentaytres] = useState({campo: '', valido: null});
  const [cuarentaycuatro, cambiarcuarentaycuatro] = useState({campo: '', valido: null});
  const [cuarentaycinco, cambiarcuarentaycinco] = useState({campo: '', valido: null});
  const [cuarentayseis, cambiarcuarentayseis] = useState({campo: '', valido: null});
  const [cuarentaysiete, cambiarcuarentaysiete] = useState({campo: '', valido: null});
  const [imageURL, setImageURL] = useState(null);
  const [imageURL2, setImageURL2] = useState(null);

  const [terminos, cambiarTerminos] = useState({campo: '', valido: false});
  const [formularioValido, cambiarFormularioValido] = useState({campo: '', valido: null});


  const expresiones = {
    municipio: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    codestab: /^\d{1,5}$/, // 1 a 4 digitos.
    fecha: /[0-9]{4}[-][0-9]{2}[-][0-9]{2}$/, // formato mm/dd/yy
    estrato: /^\d{1}$/, // 1 digito numerico.
    dinero: /^\d{1,10}$/,
    areaNegocio: /^\d{1,3}$/,
    identificacion: /^\d{5,13}$/,
    dosDecimales: /^[+-]?([0-9]*[,])?[0-9]+$/,
    puntoyComa: /^\d{1,3}(?:.\d{3})*(?:,\d+)?$/,
    razonSocial: /^[a-zA-Z\d\W]{1,50}$/,
    numero: /^[0-9]{1,2}$/, // numeros de 0 al 99
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 1 a 4 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,10}$/, // 7 a 10 numeros.
    ingresosPais: /^\d{1,17}$/ // 
  }
  
  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  const cambioradiopersona=e=>{
    setPersona(e.target.value);
  }

  const cambioradioopcionuso=e=>{
    setopcionUso(e.target.value);
  }

  const cambioradiotipoId=e=>{
    setopcionIdentificacion(e.target.value);
  }

  const cambioradiotipoPago=e=>{
    setopcionSpi(e.target.value);
  }

  const cambioradioSancion=e=>{
    setopcionsancion(e.target.value);
  }
  
  const sigCanvas = useRef({})
  const limpiar = () => sigCanvas.current.clear()
  const guardar = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))

  const sigCanvas2 = useRef({})
  const limpiar2 = () => sigCanvas2.current.clear()
  const guardar2 = () => setImageURL2(sigCanvas2.current.getTrimmedCanvas().toDataURL("image/png"))
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(
      municipio.valido === 'true' &&
      codEstablecimiento.valido === 'true'  &&   
      fechaMaxSinSancion.valido === 'true'  &&
      depto.valido === 'true'  &&
      numFormulario.valido === 'true'  &&
      anioGravable.valido === 'true' &&
      numEmpleados.valido === 'true'  &&
      comprasAnual.valido === 'true'  &&
      estratoSocial.valido === 'true'  &&
      areaNegocio.valido === 'true'/*  &&
      decCorreccion.valido === 'true'  &&
      fechaActual.valido === 'true'  &&
      aUno.valido === 'true'  &&
      aTres.valido === 'true'  &&
      numCedula.valido === 'true'  &&
      digVerificacion.valido === 'true'  &&
      munDireccion.valido === 'true' &&
      Adepartamento.valido === 'true'  &&
      telefono.valido === 'true'  &&
      correo.valido === 'true'  &&
      establecimientos.valido === 'true'  &&
      clasifIVA.valido === 'true'  &&
      ocho.valido === 'true'  &&
      nueve.valido === 'true'  &&
      diez.valido === 'true'  &&
      once.valido === 'true'  &&
      doce.valido === 'true'  &&
      trece.valido === 'true'  &&
      catorce.valido === 'true'  &&
      quince.valido === 'true'  &&
      dieciseis.valido === 'true'  &&
      diecisiete.valido === 'true'  &&
      dieciocho.valido === 'true'  &&
      diecinueve.valido === 'true'  &&
      impIndustriaCom.valido === 'true'  &&
      totIngresoGravado.valido === 'true'  &&
      veinte.valido === 'true'  &&
      promMes3.valido === 'true'  &&
      promMes2.valido === 'true'  &&
      promMes1.valido === 'true'  &&
      veintiuno.valido === 'true'  &&
      veintidos.valido === 'true'  &&
      veintitres.valido === 'true'  &&
      veinticuatro.valido === 'true'  &&
      veinticinco.valido === 'true'  &&
      veintiseis.valido === 'true'  &&
      otrasancion.valido === 'true'  &&
      valorsancion.valido === 'true'  &&
      veintiocho.valido === 'true'  &&
      veintinueve.valido === 'true'  &&
      treinta.valido === 'true' &&
      treintayuno.valido === 'true' &&
      treintaydos.valido === 'true' &&
      treintaytres.valido === 'true' &&
      treintaycuatro.valido === 'true'  && 
      treintaycinco.valido === 'true' &&
      treintayseis.valido === 'true' &&
      treintaysiete.valido === 'true' &&
      treintayocho.valido === 'true' &&
      treintaynueve.valido === 'true' &&
      cuarenta.valido === 'true' &&
      cuarentayuno.valido === 'true' &&
      cuarentaydos.valido === 'true' &&
      cuarentaytres.valido === 'true' && 
      cuarentaycuatro.valido === 'true' &&
      cuarentaycinco.valido === 'true' &&
      cuarentayseis.valido === 'true' &&
      cuarentaysiete.valido === 'true'*/
      
      
      //personanatojur.valido === ('1' | '2')
      //opcionuso.valido === 'true' &&
      //opcionIdentificacion.valido === 'true' &&
      //opcionSpi.valido === 'true' &&
      //opcionsancion.valido === 'true' &&
    //terminos.valido === 'true' 
    //formularioValido.valido === 'null' 
    ) {
      cambiarFormularioValido(true);

      cambiarMunicipio({campo:'', valido: null})
      cambiarCodEstablecimiento({campo:'', valido: null})
      cambiarfechaMaxSinSancion({campo:'', valido: null})
      cambiardepto({campo:'', valido: null})
      cambiarnumFormulario({campo:'', valido: null})
      cambiaranioGravable({campo:'', valido: null})
      cambiarnumEmpleados({campo:'', valido: null})
      cambiarcomprasAnual({campo:'', valido: null})
      cambiarestratoSocial({campo:'', valido: null})
      cambiarareaNegocio({campo:'', valido: null})
      cambiardecCorreccion({campo:'', valido: null})
      cambiarfechaActual({campo:'', valido: null})
      cambiaraUno({campo:'', valido: null})
      cambiaraTres({campo:'', valido: null})
      cambiarnumCedula({campo:'', valido: null})
      cambiardigVerificacion({campo:'', valido: null})
      cambiarmunDireccion({campo:'', valido: null})
      cambiarAdepartamento({campo:'', valido: null})
      cambiartelefono({campo:'', valido: null})
      cambiarcorreo({campo:'', valido: null})
      cambiarestablecimientos({campo:'', valido: null})
      cambiarclasifIVA({campo:'', valido: null})
      cambiarocho({campo:'', valido: null})
      cambiarnueve({campo:'', valido: null})
      cambiardiez({campo:'', valido: null})
      cambiaronce({campo:'', valido: null})
      cambiardoce({campo:'', valido: null})
      cambiartrece({campo:'', valido: null})
      cambiarcatorce({campo:'', valido: null})
      cambiarquince({campo:'', valido: null})
      cambiardieciseis({campo:'', valido: null})
      cambiardiecisiete({campo:'', valido: null})
      cambiardieciocho({campo:'', valido: null})
      cambiardiecinueve({campo:'', valido: null})
      cambiarimpIndustriaCom({campo:'', valido: null})
      cambiartotIngresoGravado({campo:'', valido: null})
      cambiarveinte({campo:'', valido: null})
      cambiarpromMes3({campo:'', valido: null})
      cambiarpromMes2({campo:'', valido: null})
      cambiarpromMes1({campo:'', valido: null})
      cambiarveintiuno({campo:'', valido: null})
      cambiarveintidos({campo:'', valido: null})
      cambiarveintitres({campo:'', valido: null})
      cambiarveinticuatro({campo:'', valido: null})
      cambiarveinticinco({campo:'', valido: null})
      cambiarveintiseis({campo:'', valido: null})
      cambiarotrasancion({campo:'', valido: null})
      cambiarvalorsancion({campo:'', valido: null})
      cambiarveintiocho({campo:'', valido: null})
      cambiarveintinueve({campo:'', valido: null})
      cambiartreinta({campo:'', valido: null})
      cambiartreintayuno({campo:'', valido: null})
      cambiartreintaydos({campo:'', valido: null})
      cambiartreintaytres({campo:'', valido: null})
      cambiartreintaycuatro({campo:'', valido: null})
      cambiartreintaycinco({campo:'', valido: null})
      cambiartreintayseis({campo:'', valido: null})
      cambiartreintaysiete({campo:'', valido: null})
      cambiartreintayocho({campo:'', valido: null})
      cambiartreintaynueve({campo:'', valido: null})
      cambiarcuarenta({campo:'', valido: null})
      cambiarcuarentayuno({campo:'', valido: null})
      cambiarcuarentaydos({campo:'', valido: null})
      cambiarcuarentaytres({campo:'', valido: null})
      cambiarcuarentaycuatro({campo:'', valido: null})
      cambiarcuarentaycinco({campo:'', valido: null})
      cambiarcuarentayseis({campo:'', valido: null})
      cambiarcuarentaysiete({campo:'', valido: null})

      cambiarTerminos(false)
      setTimeout(function(){cambiarFormularioValido(null)},3000);

    } else {
      cambiarFormularioValido(false);
    }

    const formData = {
      municipio: municipio.campo || '',
      codEstablecimiento: codEstablecimiento.campo || '',
      fechaMaxSinSancion: fechaMaxSinSancion.campo || '',
      depto: depto.campo || '',
      numFormulario: numFormulario.campo || '',
      anioGravable: anioGravable.campo || '',
      numEmpleados: numEmpleados.campo || '',
      comprasAnual: comprasAnual.campo || '',
      estratoSocial: estratoSocial.campo || '',
      areaNegocio: areaNegocio.campo || '',
    };

    // Verificar los datos en consola
    console.log("Datos que se envían al backend:", formData);

    // Realizar el envío de los datos al backend mediante fetch
    fetch('http://localhost:5000/api/form', { // Ajusta la URL según tu servidor
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      // Aquí podrías manejar la respuesta del servidor
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    })
  }
  

  return ( 
    <main>
      <Formulario action="" onSubmit={handleSubmit}>
        <div>
          <Titulos><center>DECLARACION SISTEMA PREFERENCIAL Y/O PAGO MINIMO DE INDUSTRIA Y COMERCIO</center></Titulos>
        </div>
        
        <GridTres>
          <div>
            <Input
              estado={municipio}
              cambiarEstado={cambiarMunicipio}
              tipo="text"
              value={municipio.campo || ''}
              label="Municipio"
              placeholder=""
              name="municipio"
              leyendaError="El municipio solo debe contener letras y espacios."
              expresionRegular={expresiones.municipio}
            />
          </div>
          <div>
            <Input
              estado={codEstablecimiento}
              cambiarEstado={cambiarCodEstablecimiento}
              tipo="text"
              value={codEstablecimiento.campo || ''}
              label="Código Establecimiento"
              placeholder=""
              name="codEstablecimiento"
              leyendaError="El código debe tener entre 1 y 4 digitos numericos."
              expresionRegular={expresiones.codestab}
            />  
          </div>
          <div>
            <Input
              estado={fechaMaxSinSancion}
              cambiarEstado={cambiarfechaMaxSinSancion}
              tipo="date"
              value={fechaMaxSinSancion.campo || ''}
              label="Fecha máxima"
              placeholder="Fecha máxima sin sanción"
              name="fechaMaxSinSancion"
              leyendaError="Fecha no valida"
              expresionRegular ={expresiones.fecha}
            />
          </div>  
          <div>
            <Input
              estado={depto}
              cambiarEstado={cambiardepto}
              tipo="text"
              value={depto.campo || ''}
              label="Departamento"
              name="depto"
              leyendaError="Fecha no valida"
              expresionRegular ={expresiones.municipio}
            />
          </div>
          <div>
            <Input
              estado={numFormulario}
              cambiarEstado={cambiarnumFormulario}
              tipo="text"
              value={numFormulario.campo || ''}
              label="Numero Formulario"
              placeholder=""
              name="numFormulario"
              leyendaError="ingrese un numero de formulario"
              expresionRegular ={expresiones.codestab}
            />
          </div>
          <div>
            <Input
              estado={anioGravable}
              cambiarEstado={cambiaranioGravable}
              tipo="date"
              value={anioGravable.campo || ''}
              label="Año Gravable"
              placeholder=""
              name="anioGravable"
              leyendaError=""
              expresionRegular ={expresiones.fecha}
            />
          </div>
        </GridTres>
          
        <div>
          <Titulos><center>SISTEMA DE INDUSTRIA Y COMERCIO MUNICIPIO DE DAGUA</center></Titulos>
        </div>

        <GridTres>
          <div>
            <Input
              estado={numEmpleados}
              cambiarEstado={cambiarnumEmpleados}
              tipo="text"
              label="Numero de Empleados"
              placeholder=""
              name="numEmpleados"
              leyendaError="ingrese el numero de empleados."
              expresionRegular ={expresiones.codestab}
            />
          </div> 
          <div>
            <Input
              estado={comprasAnual}
              cambiarEstado={cambiarcomprasAnual}
              tipo="text"
              label="Compras Anuales"
              placeholder=""
              name="comprasAnual"
              leyendaError=""
              expresionRegular ={expresiones.dinero}
            />
          </div> 
          <div>
            <Input
              estado={estratoSocial}
              cambiarEstado={cambiarestratoSocial}
              tipo="taxt"
              label="Estrato Social"
              placeholder=""
              name="estratoSocial"
              leyendaError="solo un digito numerico"
              expresionRegular ={expresiones.estrato}
            />
          </div> 
          <div>
            <Input
              estado={areaNegocio}
              cambiarEstado={cambiarareaNegocio}
              tipo="text"
              label="Area Negocio"
              placeholder=""
              name="areaNegocio"
              leyendaError="Valor Numerico"
              expresionRegular ={expresiones.areaNegocio}
            />
          </div>
          <div>
            <p>Selecciona el tipo de persona</p>
              <input 
                type="radio" 
                id="natural" 
                value= 'natural'
                name= 'personanatojur'
                onChange={cambioradiopersona}
                defaultChecked
              />
            <label htmlFor="">Natural</label>
              <input 
                type="radio" 
                id="juridica" 
                value= 'juridica'
                name= 'personanatojur'
                onChange={cambioradiopersona}
              />
            <label htmlFor="">Juridica</label>
          </div>
        
          <div>
            <p>Opción de uso</p>
              <input 
                type="radio" 
                id="inicial" 
                value="inicial"
                name= 'opcionUso'
                onChange={cambioradioopcionuso}
                defaultChecked
              />
            <label htmlFor="">Declaración inicial</label>
              <input 
                type="radio" 
                id="soloPago"
                value="soloPago"
                name= 'opcionUso'
                onChange={cambioradioopcionuso}
              />
            <label htmlFor="">Solo Pago</label>
              <input 
                type="radio" 
                id="correccion" 
                value="correccion"
                name= 'opcionUso'
                onChange={cambioradioopcionuso}
              />
            <label htmlFor="">Corrección</label>
          </div>
          <div>
            <Input
              estado={decCorreccion}
              cambiarEstado={cambiardecCorreccion}
              tipo="text"
              label="Declaración que corrige No."
              placeholder="ingrese numero de formulario dec. a corregir"
              name="decCorreccion"
              leyendaError="debe ser campo numerico"
              expresionRegular ={expresiones.codestab}
            />
          </div>
        
          <div>
            <Input
              estado={fechaActual}
              cambiarEstado={cambiarfechaActual}
              tipo="date"
              label="Fecha"
              placeholder=""
              name="fechaActual"
              leyendaError=""
              expresionRegular ={expresiones.fecha}
            />
          </div>
        </GridTres>
        

        <div>
          <Titulos><center>A. INFORMACIÓN DEL CONTRIBUYENTE</center></Titulos>
        </div>

      
        <div>  
          <Input
            estado={aUno}
            cambiarEstado={cambiaraUno}
            tipo="text"
            label="1. Nombres y apellidos ó Razon social."
            name="aUno"
            leyendaError="Este campo es obligatorio."
            expresionRegular ={expresiones.razonSocial}
            />
        </div>
        
       
        <GridTres>
          <div>
            <p>2. Seleccione tipo de identificación.</p>
            <input 
              type="radio" 
              id="cedula" 
              name="opcionIdentificacion"
              value="cedula"
              onChange={cambioradiotipoId}
              defaultChecked
            />
            <label htmlFor="">CC</label>
            <input 
              type="radio" 
              id="nit" 
              name="opcionIdentificacion"
              value="nit"
              onChange={cambioradiotipoId}
            />
            <label htmlFor="">NIT</label>
            <input 
              type="radio" 
              id="targetaId" 
              name="opcionIdentificacion"
              value="targetaId"
              onChange={cambioradiotipoId}
            />
            <label htmlFor="">TI</label>
            <input 
              type="radio" 
              id="ccExtrangeria" 
              name="opcionIdentificacion"
              value="ccExtrangeria"
              onChange={cambioradiotipoId}
            />
            <label htmlFor="">CE</label>
          </div>

          <div>
            <Input
              estado={numCedula}
              cambiarEstado={cambiarnumCedula}
              tipo="text"
              label="Numero ID:"
              placeholder=""
              name="numCedula"
              leyendaError="debe ser campo numerico"
              expresionRegular ={expresiones.identificacion}
            />
          </div>
          <div>
            <Input
              estado={digVerificacion}
              cambiarEstado={cambiardigVerificacion}
              tipo="text"
              label="Digito Verificacion:"
              placeholder="DV"
              name="digVerificacion"
              leyendaError="debe ser campo numerico"
              expresionRegular ={expresiones.estrato}
            />
          </div>

          <div>
          <p>Seleccione tipo de pago.</p>
            <input 
              type="radio" 
              id="1" 
              name="opcionSpi"
              value= "1"
              onChange={cambioradiotipoPago}
              defaultChecked
            />
            <label htmlFor="">S.P.I</label>
            <input 
              type="radio" 
              id="2" 
              name="opcionSpi"
              value="2"
              onChange={cambioradiotipoPago}
            />
            <label htmlFor="">PAGO MINIMO</label>
          </div>
          
          <div>
            <Input
              estado={aTres}
              cambiarEstado={cambiaraTres}
              tipo="text"
              label="3. Dirección de notificación."
              name="aTres"
              leyendaError="Este campo es obligatorio"
              expresionRegular ={expresiones.razonSocial}
            />
          </div>

          <div>
            <Input
              estado={munDireccion}
              cambiarEstado={cambiarmunDireccion}
              tipo="text"
              label="Municipio o distrito de la dirección"
              name="munDireccion"
              leyendaError=""
              expresionRegular ={expresiones.municipio}
            />
          </div>
          <div>
            <Input
              estado={Adepartamento}
              cambiarEstado={cambiarAdepartamento}
              tipo="text"
              label="Departamento"
              name="Adepartamento"
              leyendaError=""
              expresionRegular ={expresiones.municipio}
            />
          </div>

          <div>
            <Input
              estado={telefono}
              cambiarEstado={cambiartelefono}
              tipo="text"
              label="4. Telefono"
              name="telefono"
              leyendaError="Solo acapta valores numericos."
              expresionRegular ={expresiones.telefono}
            />
          </div>
          <div>
            <Input
              estado={correo}
              cambiarEstado={cambiarcorreo}
              tipo="mail"
              label="5. Correo Electronico"
              name="correo"
              leyendaError=""
              expresionRegular ={expresiones.correo}
            />
          </div>
          <div>
            <Input
              estado={establecimientos}
              cambiarEstado={cambiarestablecimientos}
              tipo="text"
              label="6. No. de establecimientos"
              name="establecimientos"
              leyendaError="Solo valores numericos entre 0 y 99"
              expresionRegular ={expresiones.numero}
            />
          </div>
          <div>
            <Input
              estado={clasifIVA}
              cambiarEstado={cambiarclasifIVA}
              tipo="text"
              label="7. Clasificación del IVA"
              name="clasifIVA"
              leyendaError="No acepta numeros"
              expresionRegular ={expresiones.nombre}
            />
          </div>
        </GridTres>
        

        <div>
          <Titulos><center>B. BASE GRAVABLE</center></Titulos>
        </div>

      
        
        <GridDos>
          <Input
            estado={ocho}
            cambiarEstado={cambiarocho}
            tipo="text"
            label="8. TOTAL INGRESOS BRUTOS ORDINARIOS Y EXTRAORDINARIOS EN TODO EL PAIS"
            name="ocho"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={nueve}
            cambiarEstado={cambiarnueve}
            tipo="text"
            label="9. MENOS INGRESOS FUERA DE ESTE MUNICIPIO O DISTRITO"
            name="nueve"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={diez}
            cambiarEstado={cambiardiez}
            tipo="text"
            label="10. TOTAL INGRESOS BRUTOS  ORDINARIOS Y EXTRAORDINARIOS EN ESTE MUNICIPIO (RENGLON 8 MENOS 9)"
            name="diez"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={once}
            cambiarEstado={cambiaronce}
            tipo="text"
            label="11. MENOS INGRESOS POR DEVOLUCIONES, REBAJAS, DESCUENTOS"
            name="once"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={doce}
            cambiarEstado={cambiardoce}
            tipo="text"
            label="12. MENOS INGRESOS POR VENTA DE ACTIVOS FIJOS"
            name="doce"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={trece}
            cambiarEstado={cambiartrece}
            tipo="text"
            label="13. MENOS INGRESOS POR ACTIVIDADES EXCLUIDAS O NO SUJETAS Y OTROS INGRESOS NO GRAVADOS"
            name="trece"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={catorce}
            cambiarEstado={cambiarcatorce}
            tipo="text"
            label="14. MENOS INGRESOS POR OTRAS ACTIVIDADES EXENTAS EN ESTE MUNICIPIO O DISTRITO (POR ACUERDO)"
            name="catorce"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
          <Input
            estado={quince}
            cambiarEstado={cambiarquince}
            tipo="text"
            label="15. TOTAL INGRESOS NETOS GRAVABLES (RENGLON 10 MENOS RENGLÓN 11, 12, 13, Y 14 )"
            name="quince"
            leyendaError=""
            expresionRegular ={expresiones.ingresosPais}
          />
        </GridDos>
       

        <div>
          <Titulos><center>C. DISCRIMINACIÓN DE VARIABLES DEL SISTEMA PREFERENCIAL</center></Titulos>
        </div>

        <GridTres>
          <Input
            estado={dieciseis}
            cambiarEstado={cambiardieciseis}
            tipo="text"
            label="16. AREA DEL ESTABLECIMIENTO"
            name="dieciseis"
            leyendaError="solo acepta valores numericos de hasta 3 digitos."
            expresionRegular ={expresiones.areaNegocio}
          />
          <Input
            estado={diecisiete}
            cambiarEstado={cambiardiecisiete}
            tipo="text"
            label="17. ESTRATO SOCIAL"
            name="diecisiete"
            leyendaError="ingrese valor numerico de un digito."
            expresionRegular ={expresiones.estrato}
          />
          <Input
            estado={dieciocho}
            cambiarEstado={cambiardieciocho}
            tipo="text"
            label="18.INGRESOS MENSUALES"
            name="dieciocho"
            leyendaError="valor numerico."
            expresionRegular ={expresiones.dinero}
          />
          <CDiecinueve>
            <Input
              estado={diecinueve}
              cambiarEstado={cambiardiecinueve}
              tipo="text"
              label="19.CONSUMOS DE KILOWATIOS DE ENERGIA"
              name=""
              leyendaError=""
              expresionRegular ={expresiones.dosDecimales}
            />
          </CDiecinueve>
          <IIC>
            <Input
              estado={impIndustriaCom}
              cambiarEstado={cambiarimpIndustriaCom}
              tipo="text"
              label="IMPUESTO INDUSTRIA Y COMERCIO (S.P)"
              name=""
              leyendaError=""
              expresionRegular ={expresiones.dinero}
            />
          </IIC>
            <Input
              estado={totIngresoGravado}
              cambiarEstado={cambiartotIngresoGravado}
              tipo="text"
              label="TOTAL INGRESOS GRAVADOS"
              name="totIngresoGravado"
              leyendaError=""
              expresionRegular ={expresiones.dinero}
            />
            
              <Input
                estado={veinte}
                cambiarEstado={cambiarveinte}
                tipo="text"
                label="20. TOTAL IMPUESTO"
                name="veinte"
                leyendaError=""
                expresionRegular ={expresiones.dinero}
              />
                    
            <Input
              estado={promMes3}
              cambiarEstado={cambiarpromMes3}
              tipo="text"
              label="PROMEDIO KILOWATIOS MES 3"
              name=""
              leyendaError=""
              expresionRegular ={expresiones.codestab}
            />
            <Input
              estado={promMes2}
              cambiarEstado={cambiarpromMes2}
              tipo="text"
              label="PROMEDIO KILOWATIOS MES 2"
              name=""
              leyendaError=""
              expresionRegular ={expresiones.codestab}
            />
            <Input
              estado={promMes1}
              cambiarEstado={cambiarpromMes1}
              tipo="text"
              label="PROMEDIO KILOWATIOS MES 1"
              name=""
              leyendaError=""
              expresionRegular ={expresiones.codestab}
            />
            <CVeintiuno>
            <Input
              estado={veintiuno}
              cambiarEstado={cambiarveintiuno}
              tipo="text"
              label="21. ALTERNATIVA PAGO MINIMO DE IND. Y COM."
              name=""
              leyendaError=""
              expresionRegular ={expresiones.puntoyComa}
            />
            </CVeintiuno>
        </GridTres>
        

        <Finalizarenglon>
        <CVeintidos>
          
          <div>
            <Titulos><center>D. LIQUIDACIÓN PRIVADA</center></Titulos>
          </div>
      
          <Input
          estado={veintidos}
          cambiarEstado={cambiarveintidos}
          tipo="text"
          label="22. TOTAL IMPUESTO DE INDUSTRIA Y COMERCIO (RENGLÓN 20 o 21)"
          name="veintidos"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
          />
        
        
        <Input
          estado={veintitres}
          cambiarEstado={cambiarveintitres}
          tipo="text"
          label="23. IMPUESTO DE AVISOS Y TABLEROS (15% del renglón 22)"
          name="veintitres"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
        />
        
        <Input
          estado={veinticuatro}
          cambiarEstado={cambiarveinticuatro}
          tipo="text"
          label="24. TOTAL IMPUESTO A CARGO (RENGLÓN 22+23)"
          name="veinticuatro"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
        />
        
        
        <Input
          estado={veinticinco}
          cambiarEstado={cambiarveinticinco}
          tipo="text"
          label="25. MENOS VALOR DE EXCENCIÓN O EXONERACIÓN SOBRE EL IMPUESTO Y NO SOBRE LOS INGRESOS"
          name="veintidos"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
        />
        
        <CDiecinueve>
        <Input
          estado={veintiseis}
          cambiarEstado={cambiarveintiseis}
          tipo="text"
          label="26. MENOS RETENCIONES que le practicaron a favor de este municipio o distrito en este periodo"
          name="veintiseis"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
        />
        </CDiecinueve>
        
        <div>
          <p>27. Sanciones:</p>
          
          <input 
            type="radio" 
            id="extemporaneidad" 
            name="opciontipoID"
            value="extemporaneidad"
            onChange={cambioradioSancion}
            defaultChecked
          />
          <label htmlFor="">Extemporaneidad</label>

          <input 
            type="radio" 
            id="correccion" 
            name="opciontipoID"
            value="correccion"
            onChange={cambioradioSancion}
          />
          <label htmlFor="">Corrección</label>

          <input 
            type="radio" 
            id="inexactitud" 
            name="opciontipoID"
            value="inexactitud"
            onChange={cambioradioSancion}
          />
          <label htmlFor="">Inexactitud</label>

          <input 
            type="radio" 
            id="otraSancion" 
            name="opciontipoID"
            value="otraSancion"
            onChange={cambioradioSancion}
          />
          <label htmlFor="">Otra</label>
        </div>

        
        <Input
          estado={otrasancion}
          cambiarEstado={cambiarotrasancion}
          tipo="text"
          label="Otra sanción. Cual?"
          placeholder="Escriba la otra sancion seleccionada"
          name="otrasancion"
          leyendaError=""
          expresionRegular ={expresiones.municipio}
          />

        <Input
          estado={valorsancion}
          cambiarEstado={cambiarvalorsancion}
          tipo="text"
          label="VALOR SANCIÓN"
          name="valorsancion"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
          />

          
        
        <Input
          estado={veintiocho}
          cambiarEstado={cambiarveintiocho}
          tipo="text"
          label="TOTAL SALDO A CARGO (RENGLÓN 24-25-26+27)"
          name="veintiocho"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
          />
      
        

        <div>
          <Titulos><center>E. PAGO</center></Titulos>
        </div>

        
        <Input
          estado={veintinueve}
          cambiarEstado={cambiarveintinueve}
          tipo="text"
          label="INTERESES DE MORA"
          name="veintinueve"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
        />
        <Input
          estado={treinta}
          cambiarEstado={cambiartreinta}
          tipo="text"
          label="TOTAL A PAGAR (RENGLÓN 28+29)"
          name="treinta"
          leyendaError=""
          expresionRegular ={expresiones.puntoyComa}
          />
          </CVeintidos>
          </Finalizarenglon>

        <div>
          <Titulos><center>F. LIQUIDADOR PEQUEÑOS CONTRIBUYENTES</center></Titulos>
        </div>
        
        <GridDos>
          <Input
          estado={treintayuno}
          cambiarEstado={cambiartreintayuno}
          tipo="text"
          label="31. COSTO FIJO"
          name="treintayuno"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaydos}
          cambiarEstado={cambiartreintaydos}
          tipo="text"
          label="32. COSTO VARIABLE"
          name="treintaydos"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaytres}
          cambiarEstado={cambiartreintaytres}
          tipo="text"
          label="33. ESTRATO"
          name="treintaytres"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaycuatro}
          cambiarEstado={cambiartreintaycuatro}
          tipo="text"
          label="34. AREA"
          name="treintaycuatro"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaycinco}
          cambiarEstado={cambiartreintaycinco}
          tipo="text"
          label="35. VENTAS"
          name="treintaycinco"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintayseis}
          cambiarEstado={cambiartreintayseis}
          tipo="text"
          label="36. CONSUMO DE ENERGIA"
          name="treintayseis"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaysiete}
          cambiarEstado={cambiartreintaysiete}
          tipo="text"
          label="37. FACTOR ESTRATO"
          name="treintaysiete"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintayocho}
          cambiarEstado={cambiartreintayocho}
          tipo="text"
          label="38. FACTOR ENERGIA"
          name="treintayocho"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={treintaynueve}
          cambiarEstado={cambiartreintaynueve}
          tipo="text"
          label="39. FACTOR VENTAS"
          name="treintaynueve"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={cuarenta}
          cambiarEstado={cambiarcuarenta}
          tipo="text"
          label="40. FACTOR DE AREA"
          name="cuarenta"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />
        </GridDos>

        <br></br><br></br>

          <Input
          estado={cuarentayuno}
          cambiarEstado={cambiarcuarentayuno}
          tipo="text"
          label="41. IMPUESTO DE INDUSTRIA Y COMERCIO"
          name="cuarentayuno"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={cuarentaydos}
          cambiarEstado={cambiarcuarentaydos}
          tipo="text"
          label="42. AVISOS Y TABLEROS"
          name="cuarentaydos"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

          <Input
          estado={cuarentaytres}
          cambiarEstado={cambiarcuarentaytres}
          tipo="text"
          label="43. TOTAL ICA"
          name="cuarentaytres"
          leyendaError=""
          expresionRegular ={expresiones.dinero}
          />

        <br></br><br></br><br></br>
        
        <GridDos>
          <Popup modal trigger={<Boton>Firma Declarante</Boton>} closeOnDocumentClick={false}>
            {close => (
              <>
              <SignaturePad 
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }} />
              <Boton onClick={close}>Cerrar</Boton>
              <Boton onClick={limpiar}>Limpiar</Boton>
              <Boton onClick={guardar}>Listo!</Boton>
              </>
            )}
          </Popup>

          <Popup modal trigger={<Boton>Responsable Datos</Boton>} closeOnDocumentClick={false}>
            {close => (
              <>
              <SignaturePad 
              ref={sigCanvas2}
              canvasProps={{
                className: "signatureCanvas"
              }} />
              <Boton onClick={close}>Cerrar</Boton>
              <Boton onClick={limpiar2}>Limpiar</Boton>
              <Boton onClick={guardar2}>Listo!</Boton>
              </>
            )}
          </Popup>

          
        </GridDos>

        <br></br>
        
        
        <CVeintidos>

        <GridDos>
          {imageURL ? 
          (<img
            src={imageURL}
            alt='declarante'
            style={{
              display: 'block',
              margin: 'auto',
              border: '1px solid black',
              width: '300px',
              background: 'white',
              alignItems: 'left'
            }}
          />): null}

          {imageURL2 ? 
          (<img
            src={imageURL2}
            alt='declarante'
            style={{
              display: 'block',
              margin: 'auto',
              border: '1px solid black',
              width: '300px',
              background: 'white',
              alignItems: 'left'
            }}
          />): null}

          <Input
          estado={cuarentaycuatro}
          cambiarEstado={cambiarcuarentaycuatro}
          tipo="text"
          name="cuarentaycuatro"
          leyendaError=""
          expresionRegular ={expresiones.nombre}
          placeholder = 'Nombre declarante'
          />

          <Input
          estado={cuarentaycinco}
          cambiarEstado={cambiarcuarentaycinco}
          tipo="text"
          name="cuarentaycinco"
          leyendaError=""
          expresionRegular ={expresiones.nombre}
          placeholder = 'Nombre responsable datos'
          />
          
          <Input
          estado={cuarentayseis}
          cambiarEstado={cambiarcuarentayseis}
          tipo="text"
          name="cuarentayseis"
          leyendaError=""
          expresionRegular ={expresiones.numero}
          placeholder = 'Ingrese documento de ID'
          />

          <Input
          estado={cuarentaysiete}
          cambiarEstado={cambiarcuarentaysiete}
          tipo="text"
          name="cuarentaysiete"
          leyendaError=""
          expresionRegular ={expresiones.numero}
          placeholder = 'ingrese CC'
          />
        </GridDos> 
        </CVeintidos> 
            

        <br></br><br></br>

        <div>
          <Terminos>
            <tr>
              <input 
                type="checkbox" 
                name="terminos" 
                id="terminos"
                checked={terminos.valido}
                onChange={onChangeTerminos}
              />
              <b>Acepto los terminos y condiciones.</b>
            </tr> 
          </Terminos>       
        </div>
        <div>    
          {formularioValido === false && <MensajeError>
            <p>
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <b>Error:</b> Por favor rellena el formulario por completo.
            </p>
          </MensajeError>}

          <ContenedorBotonEnviar>
            <Boton type="submit">Enviar</Boton>
            {formularioValido === true && <MensajeExito>Formulario enviado con exito!</MensajeExito>}
          </ContenedorBotonEnviar>
        </div>
      </Formulario>
    </main>

  );
}


export default App;
