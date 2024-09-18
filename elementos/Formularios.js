import styled, {css} from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d",
}

const Titulos = styled.h2`
  
  margin: 50px 0px 20px 0px ;
`;

const Formulario = styled.form`
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 800px){
      grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: grid;
  grid-template-columns: auto;
  padding: 10px;
  min-height: 52px;
  cursor: pointer;
  text-align: left;
  align-items:center;
  

  ${props => props.valido === 'false' && css`
    color: ${colores.error};
  `}
 `;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background: #fff;
  border-radius: 5px;
  height: 45px;
  line-height: 45px;
  padding: 0 35px 0 10px;
  transition: .3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }

  ${props => props.valido === 'true' && css`
    border: 3px solid transparent;
  `}

  ${props => props.valido === 'false' && css`
    border: 3px solid ${colores.error} !important;
  `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${props => props.valido === 'true' && css`
    display: none;
  `}

  ${props => props.valido === 'false' && css`
    display: block;
  `}

  @media (max-width: 800px) {
    grid-column: span:1;
  }
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px; 
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${props => props.valido === 'false' && css`
    opacity: 1;
    color: ${colores.error}
  `}
  
  ${props => props.valido === 'true' && css`
    opacity: 1;
    color: ${colores.exito}
  `}
`;

const Terminos = styled.div`
  
}
 
  @media (max-width: 800px) {
    grid-column: span 3;
  }
`;

const ContenedorBotonEnviar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 3;
  
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  height: 45px;
  line-height: 45px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: .1s ease all;
  margin: 0px auto;
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.p`
  height: 45px;
  line-height: 45px;
  background: #F66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 3;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;

const GridTres = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 15px;
`;

const GridDos = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-column: span 2;
gap: 15px;
margin: 0px auto;
font-size: 13px;
`;

const BBasegravable = styled.div`
  //display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  //font-size: 14.5px;
  //margin: 0px auto;
  //gap: 15px;
  background: red;
`;

const CDiecinueve = styled.div`
  font-size: 13.5px
`;

const IIC = styled.div`
  font-size: 14px
`;

const CVeintiuno = styled.div`
  font-size: 12.5px
`;

const Finalizarenglon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
`;

const CVeintidos = styled.div`
  font-size: 12px
  display: grid;
  grid-column: span 2;
  gap: 15px;
`;

export {
    Formulario, 
    Label, 
    GrupoInput, 
    Input, 
    LeyendaError, 
    IconoValidacion, 
    Terminos, 
    ContenedorBotonEnviar,
    Boton, 
    MensajeExito, 
    MensajeError,
    Titulos,
    GridTres,
    GridDos,
    BBasegravable,
    CDiecinueve,
    IIC,
    CVeintiuno,
    Finalizarenglon,
    CVeintidos,
    
};