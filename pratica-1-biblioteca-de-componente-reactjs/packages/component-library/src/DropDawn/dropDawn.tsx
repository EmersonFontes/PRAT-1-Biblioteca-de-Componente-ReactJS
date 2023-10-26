import { useState } from "react";
import { styles as sy } from "./dropDawn.styles"

const opitions = ['Português','Matemática','Inglês','Geografia'];
const Dropdawn:React.FC = () => {
    
    const [isActive,setIsActive] = useState(false);
    const [selected,setSelected] = useState("Escolha uma opção");
        return (
            <sy.container className="container">
           
                <sy.container className="dropdown">
           
                <sy.container className="dropdown-bnt" onClick={() => setIsActive(!isActive)}>
                    {selected}    
                </sy.container>
                    {isActive && (
                
                <sy.container className="dropdown-content">
                    {opitions.map((opition) => (<sy.container onClick={() => 
                    {setSelected(opition);
                    setIsActive(false);
                    }} className="dropdown-item">{opition}</sy.container>))}
                </sy.container>)}

                </sy.container>
            </sy.container>
    );
    };

    export {Dropdawn};

