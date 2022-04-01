setTimeout(affichePremiereConnexion, 1500);


// Affichage la page 1ère connexion
function affichePremiereConnexion(){
    document.getElementById("premiere_connexion").style.visibility = "visible";
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "hidden";
}

// Affichage de l'accueil
function afficheAccueil(){
    document.getElementById("informations").style.visibility = "hidden";
    document.getElementById("premiere_connexion").style.visibility = "hidden";
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "hidden";
    document.getElementById("cadeaux").style.visibility = "hidden";
    document.getElementById("classement").style.visibility = "hidden";
    document.getElementById("accueil").style.visibility = "visible";
    document.getElementById("background").style.filter = "none";

}

// Affichage la page des informations
function afficheInformations(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("informations").style.visibility = "visible";
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
    var son_timer = new Audio("./son/timer.mp3")
    var son_go = new Audio("./son/go.mp3")
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("encart_regles_jeu_3").style.visibility = "hidden";
    document.getElementById("compte_rebours_3").style.visibility = "visible";
    son_timer.play();
    setTimeout(function (){
        document.getElementById("compte_rebours_3").style.visibility = "hidden";
        document.getElementById("compte_rebours_2").style.visibility = "visible";
        son_timer.play();
        setTimeout(function (){
            document.getElementById("compte_rebours_2").style.visibility = "hidden";
            document.getElementById("compte_rebours_1").style.visibility = "visible";
            son_timer.play();
            setTimeout(function (){
                document.getElementById("compte_rebours_1").style.visibility = "hidden";
                document.getElementById("compte_rebours_go").style.visibility = "visible";
                son_go.play();
                setTimeout(function (){
                    document.getElementById("compte_rebours_go").style.visibility = "hidden";
                    afficheJeu();
                },1300);
            },1300);
        },1300);
    }, 1300);

}

// Affichage du jeu
function afficheJeu(){
    window.location.href = 'jeu_v1.html';
}

// Affichage de la réponse à la question
function reponseFausseAffichage(){
    document.getElementById("background").style.filter = "blur(4px)";
    document.getElementById("cartes").style.filter = "blur(4px)";
    document.getElementById("progress").style.filter = "blur(4px)";
    document.getElementById("positionnement").style.filter = "blur(4px)";
    document.getElementById("reponse_fausse").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";

    setTimeout(function (){
        document.getElementById("background").style.filter = "none";
        document.getElementById("cartes").style.filter = "none";
        document.getElementById("progress").style.filter = "none";
        document.getElementById("positionnement").style.filter = "none";
        document.getElementById("reponse_fausse").style.visibility = "hidden";
        document.getElementById("choix_reponse").style.visibility = "visible";
    }, 1500);
    questionSuivante();
}

function reponseBonneAffichage(){
    document.getElementById("background").style.filter = "blur(4px)";
    document.getElementById("cartes").style.filter = "blur(4px)";
    document.getElementById("progress").style.filter = "blur(4px)";
    document.getElementById("positionnement").style.filter = "blur(4px)";
    document.getElementById("reponse_bonne").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";

    setTimeout(function (){
        document.getElementById("background").style.filter = "none";
        document.getElementById("cartes").style.filter = "none";
        document.getElementById("progress").style.filter = "none";
        document.getElementById("positionnement").style.filter = "none";
        document.getElementById("reponse_bonne").style.visibility = "hidden";
        document.getElementById("choix_reponse").style.visibility = "visible";
    }, 1500);
    questionSuivante();
}

// Affichage des différentes pages de règles du jeu lors de la première connexion
function pageReglesUne(){
    document.getElementById("encart_regles_jeu_1").style.visibility = "visible";
    document.getElementById("encart_regles_jeu_2").style.visibility = "hidden";
    document.getElementById("encart_regles_jeu_3").style.visibility = "hidden";

}

function pageReglesDeux(){
    document.getElementById("encart_regles_jeu_1").style.visibility = "hidden";
    document.getElementById("encart_regles_jeu_2").style.visibility = "visible";
    document.getElementById("encart_regles_jeu_3").style.visibility = "hidden";
}

function pageReglesTrois(){
    document.getElementById("encart_regles_jeu_1").style.visibility = "hidden";
    document.getElementById("encart_regles_jeu_2").style.visibility = "hidden";
    document.getElementById("encart_regles_jeu_3").style.visibility = "visible";
}

// Affichage lors de la fin du jeu
var affichageFinJeu = function affichageFinJeu(){
    setTimeout(function (){
        document.getElementById("background").style.filter = "blur(4px)";
        document.getElementById("cartes").style.filter = "blur(4px)";
        document.getElementById("progress").style.filter = "blur(4px)";
        document.getElementById("positionnement").style.filter = "blur(4px)";
        document.getElementById("fin_jeu").style.visibility = "visible";
        document.getElementById("choix_reponse").style.visibility = "hidden";
        question.innerHTML= "";
        setTimeout(function (){
            window.location.replace('./index.html');
        }, 3000);
    }, 1500);
}








