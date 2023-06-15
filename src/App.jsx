import './App.css'
import { useState } from 'react';
import FormularioAG from './components/FormularioAG';

function App() {
  const [nombre, setNombre] = useState('');
  return (

        <FormularioAG
          nombre={nombre}
          setNombre={setNombre}
          />
  )
}

export default App
