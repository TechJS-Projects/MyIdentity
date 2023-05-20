import {Route,Routes,Link} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Accueil from "./Pages/Accueil";
import ChoixMenu from "./Pages/ChoixMenu";
import Acceder from "./Pages/acceder";
import Inscription from './Pages/inscription';
import Identite from './Pages/ToutesIdentites';

function App() {
  return (
    <div>
        <BrowserRouter>    
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/inscription" element={<Inscription/>} />
                <Route path="/ToutesIdentites" element={<Identite/>} />
                <Route path="/acceder" element={<Acceder/>} />
                <Route path="/choixMenu" element={<ChoixMenu/>} />
            </Routes>
        </BrowserRouter>
        
    </div>
    );
}
export default App;