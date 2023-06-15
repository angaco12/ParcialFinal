export const ImagenAG = ({setcarta1, carta1})=>{
     let carta = "carta"
     if (carta1 == null){
        console.log("cartas")
     } else{
         if (carta1){
            console.log(carta1)
            if (carta1.cards != null){
                console.log("entro aqui")
                carta = carta1.cards
            }
         } 
        
     }
    return(
        <div>
            <img src= {carta[0].image}></img>
           
        </div>
    ) 
}