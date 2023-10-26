import ModalProps from "./modal.types";
import React from "react"
import {style as s} from "./modal.style"

export const Modal: React.FC<ModalProps> = ({isOpen,setModal, children, title, style}) => {

    if(isOpen){
        
      return <s.container background={style.background}>
          <s.div>
              <s.p color={style.color} >{title}</s.p>
          </s.div>
          <s.divCetral>
              {children}
          </s.divCetral>
          <s.divFinal>
              <s.button onClick={()=>setModal()}>fechar</s.button>
          </s.divFinal>
      </s.container>
    }
  
    return null
  }
  