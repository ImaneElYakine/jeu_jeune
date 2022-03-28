setTimeout(affichePremiereConnexion, 1000);
var cadeaux = [
    "Iphone 13",
    "Abonnement Premium Spotify",
    "Planche de skateboard"
]

// Affichage la page 1ère connexion
function affichePremiereConnexion(){
    document.getElementById("premiere_connexion").style.visibility = "visible";
}

// Affichage de l'accueil
function afficheAccueil(){
    document.getElementById("informations").style.visibility = "hidden";
    document.getElementById("premiere_connexion").style.visibility = "hidden";
    document.getElementById("presentation").style.visibility = "hidden";
    document.getElementById("cadeaux").style.visibility = "hidden";
    document.getElementById("classement").style.visibility = "hidden";
    document.getElementById("accueil").style.visibility = "visible";
    document.getElementById("background").style.filter = "none";

}

// Affichage la page des informations
function afficheInformations(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("informations").style.visibility = "visible";
    document.getElementById("background").style.filter = "blur(5px)";
}

// Affichage du classement
function afficheClassement(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("classement").style.visibility = "visible";
}

// Affichage de la page des cadeaux
function afficheCadeaux(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("cadeaux").style.visibility = "visible";
    // Liste des cadeaux

}

// Affichage des règles avant le jeu (pour une 1ère connexion)
function afficheRegles(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("regles_jeu").style.visibility = "visible";
}

// Lancement du compte à rebours
function compteRebours(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("regles_jeu").style.visibility = "hidden";
    const compte_rebours = document.getElementById("compte_rebours");
    compte_rebours.style.visibility = "visible";
    var elem3 =  document.getElementById("compte_rebours_3");
    var elem2 =  document.getElementById("compte_rebours_2")
    afficheJeu();
}

// Affichage du jeu
function afficheJeu(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("jeu").style.visibility = "visible";
    document.getElementById("compte_rebours").style.visibility = "hidden";
    // Affichage de la position en fonction du nombre total de questions
    var position = document.getElementById("position");
    for (let i = 0; i < totalQuestion ; i++) {
        const dot = document.createElement("div");
        dot.setAttribute("id", i.toString());
        dot.classList.add('dot');
        position.appendChild(dot);
    }
}

// Affichage de la réponse à la question
function reponseFausseAffichage(){
    document.getElementById("background").style.filter = "blur(4px)";
    document.getElementById("cartes").style.filter = "blur(4px)";
    document.getElementById("progress").style.filter = "blur(4px)";
    document.getElementById("reponse_fausse").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";


    setTimeout(function (){
        // désactiver temporairement les boutons
        document.getElementById("background").style.filter = "none";
        document.getElementById("cartes").style.filter = "none";
        document.getElementById("progress").style.filter = "none";
        document.getElementById("reponse_fausse").style.visibility = "hidden";
        document.getElementById("choix_reponse").style.visibility = "visible";
    }, 2000);
    // on passe à la slide suivante
}

function reponseBonneAffichage(){
    document.getElementById("background").style.filter = "blur(4px)";
    document.getElementById("cartes").style.filter = "blur(4px)";
    document.getElementById("progress").style.filter = "blur(4px)";
    document.getElementById("reponse_bonne").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";

    setTimeout(function (){
        // désactiver temporairement les boutons
        document.getElementById("background").style.filter = "none";
        document.getElementById("cartes").style.filter = "none";
        document.getElementById("progress").style.filter = "none";
        document.getElementById("reponse_bonne").style.visibility = "hidden";
        document.getElementById("choix_reponse").style.visibility = "visible";
    }, 1000);
    // on passe à la slide suivante

}








