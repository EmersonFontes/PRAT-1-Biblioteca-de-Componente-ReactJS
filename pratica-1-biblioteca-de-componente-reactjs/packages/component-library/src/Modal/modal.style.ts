import styled, { keyframes } from 'styled-components'

const Animacao = keyframes`
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div<{background:string}>`
z-index: 2;
    position: absolute;
    top: 25%;
    left: 25%;
    width: 50%;
    height: 50%;
    background: ${(props)=>props.background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    animation: ${Animacao} 0.5s ease-in-out;
`;

const Div = styled.div`

    display: flex;
    position: relative;
    height: 15%;
    width: 100%;
    align-items: center;
    justify-content: center;
    
`;

const DivCentral = styled.div`

    display: flex;
    position: relative;
    width: 95%;
    height: 70%;
    flex-direction: column;
   //justify-content: center;
    align-items: center;
    overflow-y: scroll;
   
    &::-webkit-scrollbar {
    width: 8px; 
    
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: red; 
    border-radius: 10px; 
    cursor: pointer;
  }

  
`;

const DivFinal = styled.div`

    display: flex;
    width: 100%;
    height: 15%;
    position: relative;
    align-items: center;
    justify-content: center;    
    
`;

const P = styled.p<{color:string}>`
  height: 80%;
  font-size: 22px;
  font-weight: bold;
  color: ${(props=>props.color)};
`;

const Button = styled.button`
  border: none;
  &:hover{
    transition: 500ms;
    background-color: #9b0101;
    cursor: pointer;
  }
  &:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;

  }

`;

export  const style = {
    container: Container,
    button: Button,
    div:Div,
    divCetral: DivCentral,
    divFinal: DivFinal, 
    p:P}