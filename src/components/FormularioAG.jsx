import { useState, useEffect } from "react";
import { ImagenAG } from "./ImagenAG";

export const FormularioAG = ({nombre, setNombre, setdeckid, deckid}) =>{

    const [api, setapi] = useState(true);
    const [carta1, setcarta1] = useState([])
    const [extra, setextra] = useState(true);
    

    useEffect(() => {
           if (api === false) {
            const Login = async ()=>{
                const url = `http://deckofcardsapi.com/api/deck/new/`
                const resp = await fetch(url);
                const log = await resp.json();
                console.log(log);
                console.log(log.deck_id)
                setdeckid(log.deck_id)
                console.log(deckid);

                const url2 = `https://deckofcardsapi.com/api/deck/${log.deck_id}/draw/?count=1`
                const resp1 = await fetch(url2);
                const log1 = await resp1.json();
                console.log(log1);
                setcarta1(log1);
            };
        Login();
           }else{
                setapi("")
           }
      },  [api]) 



    const handlerInput = ({ target }) => {
		setNombre(target.value);
    
	};
    return (	
        <div>
        <div>
        <input
            type='text'
            placeholder='Ingrese el nombre'
            name='task'
            value={nombre}
            onChange={handlerInput}
        />
        <button type='submit' onClick={()=> setapi(false) }>
             Ingreso
        </button>
        </div>
        <div>
        </div>
        <ImagenAG
           setcarta1 = {setcarta1}
           carta1 = {carta1}
         />
        </div>
        
        
        
        )
    
}

export default FormularioAG;