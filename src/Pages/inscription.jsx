import Decoration from "../Composants/Decoration";
import Menu from "../Composants/Menu";
import {Link} from 'react-router-dom';
import '../CSS/inscription.css'
function FormInscription(){
    return (
        <div className="div-formulaire">     
            <form action="" className="formulaire">
                <input type="text" name="t_nom" id="nom" className="nom" placeholder="Nom"/>
                <input type="text" name="t_prenom" id="prenom" className="prenom"  placeholder="Prénom"/>
                <input type="date" name="d_annif" id="annif" className="annif" placeholder="Né(e) le :"/>
                <input type="text" name="t_lieu-naissance" id="lieu-naissance" className="lieu-naissance" placeholder="à"/>
                <input type="number" name="n_Num-CIN" id="Num-CIN" className="Num-CIN" placeholder="N°"/>
                <input type="text" name="t_domicile" id="domicile" className="domicile" placeholder="Domicile"/>
                <input type="text" name="t_arrondissement" id="arrondissement" className="arrondissement" placeholder="Arrondissement"/>
                <input type="text" name="t-profession" id="profession" className="profession" placeholder="Profession"/>
                <input type="text" name="t_pere" id="pere" className="pere" placeholder="Père"/>
                <input type="text" name="t_mere" id="mere" className="mere" placeholder="Mère"/>
                <input type="text" name="t_fait" id="fait" className="fait" placeholder="Fait à"/>
                <input type="date" name="t_le" id="le" className="le" placeholder="Le  "/>
                <div class="btn-list">
                    <Link to="/choixMenu"><button className="btn-suivant">Retour</button></Link>
                    <input type="submit" value="Suivant" className="btn-suivant"/>
                </div>
            </form>
        </div>
    )
}

function ContainerFormulaire() {
    return(
        <div className="container-formulaire">
            <Decoration/>
            <FormInscription/>
        </div>
    ); 
}

function Inscription(){
    return (
        <div className="super-container">
            <section className="container">
                <Menu />
                <ContainerFormulaire />
            </section>
        </div>
    );
}
export default Inscription;