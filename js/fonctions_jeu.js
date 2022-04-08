// Question en cours
let currentQuestion = 0;

// Nb de points
let pointsTotal = 0;

// Le total des questions
const totalQuestion = 5;

// Tableau des questions
const questions = [
    "La marque Audimat, de Médiamétrie, est devenu un mot du langage courant",
    "Ninho est le rappeur qui a vendu le plus d'album en 2021",
    "La VR signifie Virtual Reality soit Réalité Virtuelle",
    "Le site de E-Commerce le plus visité par les français est CDiscount",
    "Le seuil des 2 millions d'entrées est franchi pour le film The Batman"
];

// Tableau des thèmes des questions
const themes = [
    "Médiamétrie",
    "Musique",
    "High Tech",
    "E-Commerce",
    "Cinéma"
];

// Tableau des réponses aux questions
const reponses = [
    true,
    true,
    false,
    true,
    false,
];

// Tableau des points accordés à chaque question
const points = [
    1,
    2,
    3,
    4,
    5,
];

// Si le joueur à donné une réponse
let clique = false;

// Le compte à rebours
let timer;

// Affichage de la question sur la carte
const question = document.getElementById("question");
question.innerHTML= themes[0] + "<br>" + questions[0];

// INITIALISATION DU SWIPER
const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    enabled: false,
    loop: false,
    noSwipingClass: "disabled",
    initialSlide: 1,
    resistance: false
});

runTimer();

// PASSAGE A LA QUESTION SUIVANTE
function questionSuivante(){
    currentQuestion++;
    if(currentQuestion >= totalQuestion){
        affichageFinJeu();
        console.log(pointsTotal);
    } else {
        question.innerHTML= themes[currentQuestion] + "<br>" + questions[currentQuestion];
        document.getElementById("dot"+currentQuestion).classList.add("active");
    }
}

// VERIFICATION DE LA REPONSE
function verificationReponse(choix){
    if(choix === false){
        if(currentQuestion < totalQuestion){
            if(reponses[currentQuestion] === false){
                reponseBonneAffichage();
                pointsTotal += points[currentQuestion];
            } else if(reponses[currentQuestion] === true){
                reponseFausseAffichage();
            }
        }
    } else if(choix === true){
        if(currentQuestion < totalQuestion){
            if(reponses[currentQuestion] === true){
                reponseBonneAffichage();
                pointsTotal += points[currentQuestion];
            } else if(reponses[currentQuestion] === false){
                reponseFausseAffichage();
            }
        }
    }
}

// EVENT SUR LE DÉCLENCHEMENT D'UN CLIQUE SUR LES BOUTONS
function eventClique(choix){
    stopTimer();
    clique = true;
    console.log("clique");
    verificationReponse(choix);
}

// ARRET DU TIMER
function stopTimer(){
    clearTimeout(timer);
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight; /* trigger reflow */
    document.getElementById("progress_bar").style.animation = null;
    console.log("stop");
}

// DEBUT DU TIMER
function runTimer(){
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight; /* trigger reflow */
    document.getElementById("progress_bar").style.animation = null;
    document.getElementById("progress_bar").style.animation = "progress 5s linear";
    timer = window.setTimeout(function (){
        reponseFausseAffichage();
    }, 5000);
}