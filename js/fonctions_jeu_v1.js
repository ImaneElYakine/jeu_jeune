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
let choix = false;

// Affichage de la question sur la carte
const question = document.getElementById("question");
question.innerHTML= themes[0] + "<br>" + questions[0];

// Lancement du timer
const bar_progress = document.getElementById("progress_bar");
//bar_progress.style.animation = "progress 5s";


// INITIALISATION DU SWIPER
const swiper = new Swiper(".mySwiper", {
    effect: "cards",
    enabled: false,
    loop: false,
    noSwipingClass: "disabled",
    initialSlide: 1,
    resistance: false
});

// Vérification de la réponse si le joueur répond faux
function choixReponseFausse(){
    choix = true;
    if(currentQuestion < totalQuestion){
        if(reponses[currentQuestion] === false){
            reponseBonneAffichage();
            pointsTotal += points[currentQuestion];
        } else if(reponses[currentQuestion] === true){
            reponseFausseAffichage();
        }
    }
}

// Vérification de la réponse si le joueur répond vrai
function choixReponseBonne(){
    choix = true;
    if(currentQuestion < totalQuestion){
        if(reponses[currentQuestion] === true){
            reponseBonneAffichage();
            pointsTotal += points[currentQuestion];
        } else if(reponses[currentQuestion] === false){
            reponseFausseAffichage();
        }
    }
}

function questionSuivante(){
    currentQuestion++;
    if(currentQuestion >= totalQuestion){
        question.innerHTML= themes[currentQuestion-1] + "<br>" + questions[currentQuestion-1];
        affichageFinJeu();
    } else {
        question.innerHTML= themes[currentQuestion] + "<br>" + questions[currentQuestion];
        document.getElementById("dot"+currentQuestion).classList.add("active");
    }
}

function cinqSecondTimer(){
    const bar_progress = document.getElementById("progress_bar");
    bar_progress.style.animation = "progress 5s";
    setTimeout(function (){
    }, 5000);
}

setTimeout(function () {
    if (choix === true) {
        clearTimeout();
    }
},5000);
