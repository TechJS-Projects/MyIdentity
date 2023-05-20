import Decoration from '../Composants/Decoration';
import Menu from '../Composants/Menu';
import { Link } from 'react-router-dom'; 
import { Typewriter } from 'react-simple-typewriter'
function ModalWindow(){
        
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
        <div className="modal-window">
            <div className="fermer">
                <p>x</p>
            </div>
            <h4 >{text}</h4> 
            <div className="cercle-modale">
            </div>   
            <Link to="/choixMenu"><button className="btn" >OUVRIR</button></Link>   
        </div>
    )
  }
  
  
  function Container(){
    return (
        <section className="container">    
            <Menu/>
            <div className="container-formulaire">
                <Decoration/>
            </div>
        </section>
    )
  } 
  
  function Accueil(){
      return(        
      <div className="super-container">
          <ModalWindow/>
          <Container/>  
      </div>
      )
  }
  export default Accueil;