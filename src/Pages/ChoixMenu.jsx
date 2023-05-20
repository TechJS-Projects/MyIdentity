import { Link } from 'react-router-dom';

import Decoration from '../Composants/Decoration'
import Decoration1 from '../Composants/Decoration1'
import Decoration2 from '../Composants/Decoration2'
import Decoration3 from '../Composants/Decoration3'
import '../CSS/animation.css';
import '../CSS/style.css'
import { Typewriter } from 'react-simple-typewriter'

function Choix(){
    return(    
    <div className="choix">
        <Link to="/inscription"><button className="btn-inscrire">S'inscrire</button></Link>
        <Link to="/inscription"><button className="btn-creer">Créer une identité</button></Link>
        <Link to="/acceder"><button className="btn-acceder">Accéder à une identité</button></Link>
    </div>
    )
}

function ChoixMenu(){
    const MyComponent = () => {
        return (
        <div className='App'>
            <Typewriter
            words={['My Identity']}
            loop={5}
            typeSpeed={170}
            deleteSpeed={50}
            delaySpeed={1000}
            />
        </div>
        )
    }
    const text =MyComponent();


    return (
    <div className="super-container">
        <section className="container">
            <div className="container-formulaire">
                <Decoration />
                <div className="grandTitre">
                    <h1>{text}</h1>
                </div>
                <Decoration1 />
                <Decoration2 />
                <Decoration3 />
                <Choix />
            </div>
        </section>
    </div>
    )
}
export default ChoixMenu;