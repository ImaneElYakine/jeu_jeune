setTimeout(affichePremiereConnexionUne, 3000);
const son_fond = new Audio('son/plage.mp3');
son_fond.loop = true;
//affichePopupDejaJoue();

// Affichage la page d'introduction 1
function affichePremiereConnexionUne() {
    document.getElementById("premiere_connexion_une").style.visibility = "visible";
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "hidden";
}

// Affichage la page d'introduction 2
function affichePremiereConnexionDeux() {
    document.getElementById("premiere_connexion_une").style.visibility = "hidden";
    document.getElementById("premiere_connexion_deux").style.visibility = "visible";
    document.getElementById("titre1").style.visibility = "hidden";
    document.getElementById("titre2").style.visibility = "hidden";
}

// Affichage de l'accueil
function afficheAccueil(){
    window.location.href = 'accueil.html';
}

// Affichage de la page des informations
function afficheInformations(){
    document.getElementById("accueil").style.visibility = "hidden";
    document.getElementById("informations").style.visibility = "visible";
}

// Affichage de la pop up points
function affichePopupPoints(){
    document.getElementById("popup_points").style.visibility = "visible";
}

// Affichage de la pop up déjà joué
function affichePopupDejaJoue(){
    document.getElementById("deja_joué").style.visibility = "visible";
}

// Fermeture de la pop up points
function fermeturePopup(){
    document.getElementById("popup_points").style.visibility = "hidden";
    document.getElementById("deja_joué").style.visibility = "hidden";
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

// Affichage de la réponse à la question, ici fausse
function reponseFausseAffichage(){
    const son_faux = new Audio("son/faux.mp3");
    son_faux.play();
    son_jeu.pause();
    son_jeu.currentTime = 0;
    document.getElementById("reponse_fausse").style.animation = 'none';
    document.getElementById("reponse_fausse").offsetHeight;
    document.getElementById("reponse_fausse").style.animation = null;
    document.getElementById("reponse_fausse").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";
    document.getElementById("cartes").style.filter = "blur(4px)";

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

// Affichage de la réponse à la question, ici bonne
function reponseBonneAffichage(){
    const son_correct = new Audio("son/correct.mp3");
    son_correct.play();
    son_jeu.pause();
    son_jeu.currentTime = 0;
    document.getElementById("reponse_bonne").style.animation = 'none';
    document.getElementById("reponse_bonne").offsetHeight;
    document.getElementById("reponse_bonne").style.animation = null;
    document.getElementById("reponse_bonne").style.visibility = "visible";
    document.getElementById("choix_reponse").style.visibility = "hidden";
    document.getElementById("cartes").style.filter = "blur(4px)";
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
function affichageFinJeu() {
    setTimeout(function () {
            window.location.replace('./accueil.html');
        }, 1500);
};

// Son de fond
function sonFond(){
    console.log(son_fond.paused);
    if (son_fond.paused === true) {
        document.getElementById("picto_son").src = "img/picto_son.svg";
        son_fond.play();
    }
    else if (son_fond.paused === false){
        document.getElementById("picto_son").src = "img/picto_muet.svg";
        son_fond.pause();
    }
}
