import Alumno from "./components/Alumno";
import Nav from "./components/layout/Nav";

const App = () => {
  return (
   <div>
    <Nav />
    <Alumno nombre = "Jon" apellido= {"Gibaut"} edad= {19} hobbies= {["guitarra 🎸", "programar 🤓"]}/>
    <Alumno nombre = "Leo" apellido= {"Messi"} edad= {33} hobbies= {["futbol ⚽"]}/>
   </div>
  );
}

export default App;
