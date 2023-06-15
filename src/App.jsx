import './App.css'
import { useState } from 'react';
import FormularioAG from './components/FormularioAG';

function App() {
  const [nombre, setNombre] = useState('');
  const [deckid, setdeckid] = useState("")
  return (

        <FormularioAG
          nombre={nombre}
          setNombre={setNombre}
          setdeckid={setdeckid}
          deckid={deckid}
          />
  )
}

export default App
