import "./App.css";
import "./index.css";
import Home from "./Pages/Home";

const list = [
  { name: "Jocsan Rueda", icons: "bi bi-person-badge-fill" },
  { name: "Sobre Mi", icons: "bi bi-person-fill-up" },
  { name: "Portafoleo", icons: "bi bi-person-square" },
  { name: "Educacion", icons: "bi bi-building-fill-gear" },
  { name: "Contacto", icons: "bi bi-building-fill-gear" },
];
function App() {
  return (
    <>
      <Home list={list}></Home>
    </>
  );
}

export default App;
