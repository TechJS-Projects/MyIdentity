import Decoration from '../Composants/Decoration'
import Menu from '../Composants/Menu'
import {Link} from 'react-router-dom'
import '../CSS/style.css'
import '../CSS/animation.css'
import { Typewriter } from 'react-simple-typewriter'

function Choix(){
    return(
        <div className="choixAcceder">
            <Link to="/inscription"><button className="btn-inscrire">Mon Identité</button></Link>
            <Link to="/ToutesIdentites"><button className="btn-acceder">Autre identité</button></Link>
            <Link to="/choixMenu"><button className="btn-acceder">Retour</button></Link>
        </div>
    )
}

function Acceder(){

    const MyComponent = () => {
        return (
        <div className='App'>
            <Typewriter
            words={['My Identity']}
            loop={5}
            typeSpeed={100}
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
            <Menu/>
            <div className="container-formulaire">
                <Decoration/>
                <div className="grandTitre1">
                    <h1>{text}</h1>
                </div>
                
                <Choix/>
            </div>
        </section>
    </div>
    )
}
export default Acceder;