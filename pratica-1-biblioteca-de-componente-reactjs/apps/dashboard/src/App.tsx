import {  CheckboxGroup, LayoutSplitter, SplitterDirection, SplitterPanel , Modal, Button, Dropdawn} from "@ifba-lab3-reactjs/component-library"
import { useState } from "react"

function App() {


  const [isOpen, setIsOpen] = useState(false);

  return (

    <div style={{height:'100vh', width: '100vw'}}>
      <LayoutSplitter orientacao={SplitterDirection.Horizontal} splitterpercent={20}>

        <SplitterPanel backgroundcolor="#0d2d3b" color="#ffffff">Lateral</SplitterPanel>

        <SplitterPanel backgroundcolor="#427a92" padding="1rem" >

         

          <div style={{width:'500px'}}>
            <p> CheckboxGroup</p>
            CheckBoxComponente
              <CheckboxGroup titulo="Meu componente Checkbox" elementos={[
                {descricao: 'Item 1', name: 'comname'},
                {descricao: 'Item 2'},
                {descricao: 'Item 3'},
                {descricao: 'Item 4'},
                {descricao: 'Item 5'},
                {descricao: 'Item 6'},
              ]} />
          </div>

         
          <Button  onClick={()=>setIsOpen(true)} caption="Modal"></Button>

        <Dropdawn ></Dropdawn>
          
        </SplitterPanel>
      
      </LayoutSplitter>
        <Modal isOpen={isOpen} title="Modal" setModal={()=>setIsOpen(!isOpen)} style={{background:"#fff", color:"#000"}} />


    </div>
  )
}

export default App
