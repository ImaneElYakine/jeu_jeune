setTimeout(affichePremiereConnexion, 1500);

// Affichage la page d'introduction
function affichePremiereConnexion() {
    document.getElementById("premiere_connexion").style.visibility = "visible";
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "hidden";
}

// Affichage de l'accueil
function afficheAccueil(){
    window.location.href = 'accueil.html';
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

// Lancement du compte à rebours
function compteRebours(){
    document.getElementById("background").click();
    const son_timer = new Audio("./son/timer.mp3");
    const son_go = new Audio("./son/go.mp3");
    son_timer.play();
    document.getElementById("compte_rebours_3").style.visibility = "visible";
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
    window.location.href = 'quiz.html';
}

// Affichage de la réponse à la question
function reponseFausseAffichage(){
    const son_faux = new Audio("son/faux.mp3");
    son_faux.play();
    document.getElementById("reponse_fausse").style.animation = 'none';
    document.getElementById("reponse_fausse").offsetHeight;
    document.getElementById("reponse_fausse").style.animation = null;
    //document.getElementById("reponse_fausse").style.animation = "scale-up-center 1.5s";
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
    setTimeout(runTimer, 1500);
}

function reponseBonneAffichage(){
    const son_correct = new Audio("son/correct.mp3");
    son_correct.play();
    document.getElementById("reponse_bonne").style.animation = 'none';
    document.getElementById("reponse_bonne").offsetHeight;
    document.getElementById("reponse_bonne").style.animation = null;
    //document.getElementById("reponse_bonne").style.animation = "scale-up-center 1.5s";
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
    setTimeout(runTimer, 1500);
}

// Affichage lors de la fin du jeu
const affichageFinJeu = function affichageFinJeu() {
    setTimeout(function () {
        //document.getElementById("background").style.filter = "blur(4px)";
        document.getElementById("cartes").style.visibility = "hidden";
        document.getElementById("progress").style.visibility = "hidden";
        document.getElementById("positionnement").style.visibility = "hidden";
        document.getElementById("fin_jeu").style.visibility = "visible";
        document.getElementById("choix_reponse").style.visibility = "hidden";
        setTimeout(function () {
            window.location.replace('./accueil.html');
        }, 3000);
    }, 1500);
};
