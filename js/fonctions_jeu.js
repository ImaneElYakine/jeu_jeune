// La question en cours
let currentQuestion = 0;

// Le total des questions
const totalQuestion = 4; //(n-1)

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
    false,
    true,
    false,
    true,
    false
];

// Affichage des questions sur les cartes
for (let i = 1; i <= totalQuestion+1; i++) {
    const carte = document.getElementById("question"+i.toString());
    carte.innerText = questions[i-1];
}

// Initialisation et paramètres de Swiper.js
// pour le choix de la réponse par le swipe
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    enabled: true,
    loop: false,
    noSwipingClass: "disabled",
    initialSlide : 1,
    resistance: false
});
var clique = false;
let current = swiper.realIndex;
let direction = swiper.previousIndex;
swiper.slideTo(3);
swiper.on('realIndexChange', function () {
    clique = false;
    // A revoir
    if(current > direction) {
        reponseFausseAffichage();
    }

    if(current < direction) {
        reponseBonneAffichage();
    }
});

console.log(document.getElementById("pouce_gauche"));
// Choix de la réponse par le clique
document.getElementById("pouce_gauche").onclick = function () {

}
document.getElementById("choix_vrai").onclick = function () {

}

