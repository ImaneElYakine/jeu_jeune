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

// Son du quiz
const son_jeu = new Audio('son/quiz.mp3')


// Affichage de la question sur la carte
const question = document.getElementById("question");
const info_question = document.getElementById("info_question");
info_question.innerHTML = themes[0] + " - " + points[0] + "pts";
question.innerHTML = questions[0];

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
son_jeu.play();

// PASSAGE A LA QUESTION SUIVANTE
function questionSuivante() {
    currentQuestion++;
    if (currentQuestion >= totalQuestion) {
        affichageFinJeu();
    } else {
        info_question.innerHTML = themes[currentQuestion] + " - " + points[currentQuestion] + "pts";
        question.innerHTML = questions[currentQuestion];
        document.getElementById("dot" + (currentQuestion-1)).classList.add("active");
    }
}

// VERIFICATION DE LA REPONSE
function verificationReponse(choix) {
    if (choix === false) {
        if (currentQuestion < totalQuestion) {
            if (reponses[currentQuestion] === false) {
                reponseBonneAffichage();
                pointsTotal += points[currentQuestion];
            } else if (reponses[currentQuestion] === true) {
                reponseFausseAffichage();
            }
        }
    } else if (choix === true) {
        if (currentQuestion < totalQuestion) {
            if (reponses[currentQuestion] === true) {
                reponseBonneAffichage();
                pointsTotal += points[currentQuestion];
            } else if (reponses[currentQuestion] === false) {
                reponseFausseAffichage();
            }
        }
    }
}

// EVENT SUR LE DÉCLENCHEMENT D'UN CLIQUE SUR LES BOUTONS
function eventClique(choix) {
    stopTimer();
    clique = true;
    console.log("clique");
    verificationReponse(choix);
}

// ARRET DU TIMER
function stopTimer() {
    clearTimeout(timer);
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight;
    document.getElementById("progress_bar").style.animation = null;
    console.log("stop");
}

// DEBUT DU TIMER
function runTimer() {
    son_jeu.play();
    document.getElementById("progress_bar").style.animation = 'none';
    document.getElementById("progress_bar").offsetHeight;
    document.getElementById("progress_bar").style.animation = null;
    document.getElementById("progress_bar").style.animation = "progress 6s linear";
    timer = window.setTimeout(function () {
        reponseFausseAffichage();
    }, 6000);
}