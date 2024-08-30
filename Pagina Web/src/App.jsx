

import './App.css'
import Home from './Pages/Home'

const list = [
  { 'name': 'Crear Docentes', 'href': '/administracion/crear-docente', 'icons': 'bi bi-person-badge-fill' },
  { 'name': 'Estudiantes', 'href': '/administracion/estudiantes', 'icons': 'bi bi-person-fill-up' },
  { 'name': 'Docentes', 'href': '/administracion/gestionar-docente', 'icons': 'bi bi-person-square' },
  { 'name': 'Procesos', 'href': '/administracion/procesos', 'icons': 'bi bi-building-fill-gear' }

]
function App() {
 

  return (
    <>
     <Home list={list}></Home>
    </>
  )
}

export default App
