import { BrowserRouter, Route } from 'react-router-dom';
import Personajes from './components/Personajes/Personajes'
import Register from './components/Register'
import Login from './components/Login2'
function App() {
  return (
    <BrowserRouter>
        <Route path="/people" component={Personajes} />
        <Route path="/registro" component={Register} />
        <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
