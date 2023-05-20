function BarreDeRecherche(){
    return(
        <div id="recherche">
            <form className="formRecherche">
                <input type="search" name="aRechercher" id="aRechercher" placeholder="Rechercher un nom ou un prenom, etc"/>
                <input type="submit" value="Rechercher" id="rechercher"/>
            </form>
        </div>
    ); 
}
export default BarreDeRecherche;