import BarreDeRecherche from '../Composants/BarreDeRecherche';
import Decoration from '../Composants/Decoration';
import Menu from '../Composants/Menu';
import '../CSS/toutesIdentite.css'
import {Link} from "react-router-dom"

function ListeGrille(){
    return(
        <div id="listesGrille">
            <div className="caseT">Id</div>
            <div className="caseT">Noms</div>
            <div className="caseT">Prenoms</div>
            <div className="caseT">Date de naissance</div>
            <div className="caseT">Lieu de naissance</div>
            <div className="caseT">Numéro CIN</div>
            <div className="case"></div>
    
            <div className="caseId">1</div>
            <div className="caseN">RAKOTO</div>
            <div className="caseN">Be</div>
            <div className="caseN">30/12/2002</div>
            <div className="caseN">Antananarivo</div>
            <div className="caseN">110012023252</div>
            <div className="case"><button class="modifier">Voir</button></div>

            
            <div class="caseId">2</div>
            <div class="caseN">RAS0A</div>
            <div class="caseN">Kely</div>
            <div class="caseN">10/01/1999</div>
            <div class="caseN">Antananarivo</div>
            <div class="caseN">101012023252</div>
            <div class="case"><button class="modifier">Voir</button></div>
    
            <div class="caseId">3</div>
            <div class="caseN">RANDRIA</div>
            <div class="caseN">Ketaka</div>
            <div class="caseN">15/06/1992</div>
            <div class="caseN">Antananarivo</div>
            <div class="caseN">10152023252</div>
            <div class="case"><button class="modifier">Voir</button></div>
    
            <div class="caseId">4</div>
            <div class="caseN">RAZAKA</div>
            <div class="caseN">Manana</div>
            <div class="caseN">23/10/1995</div>
            <div class="caseN">Antananarivo</div>
            <div class="caseN">110102023252</div>
            <div class="case"><button class="modifier">Voir</button></div>
    
            <div class="caseId">5</div>
            <div class="caseN">RASOLO</div>
            <div class="caseN">Koto</div>
            <div class="caseN">19/08/1995</div>
            <div class="caseN">Antananarivo</div>
            <div class="caseN">10187345672</div>
            <div class="case"><button class="modifier">Voir</button></div>
        </div>
                    
    );
}

function ListeIdentite(){
    return(
        <div className="list-identity">
            <BarreDeRecherche/>
            <ListeGrille/>
            
       </div>
    )
}

function Container(){
    return(
        <div className="container-formulaire">
            <Decoration/>
            <div className="div-formulaire">
                <ListeIdentite/>
                <Link to="/acceder"><button className="btn-retour">Retour</button></Link>
            </div>
        </div>
    )
}

function Identite (){
    return(
        <div className="super-container">
            <section className="container">
                <Menu/>
                <Container/>
            </section>
        </div>
    )
}
export default Identite;