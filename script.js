// récupérer les data json
const quizzData = JSON.parse(document.getElementById("quizz-data").textContent);

// constante score et n° question
let affScore = document.querySelector(".score");
let score = 0
numeroQ = 0;
affScore.textContent = score + "/" + numeroQ;

//constante affichage question
let affQ = document.getElementById("affQ");

//constantes affichage reponses
let affRA = document.getElementById("A");
let affRB = document.getElementById("B");
let affRC = document.getElementById("C");
let affRD = document.getElementById("D");

//--------------------------------------------------------------------------------

// tableau questions
let tableauQ = quizzData.questions;

let questionObjX = tableauQ[numeroQ];

// script
function scriptQuizz(){
    // Objet questionX
    questionObjX = tableauQ[numeroQ];
    // affichage questionX
    let questionX = questionObjX.question;
    affQ.textContent = questionX;

    // affichage reponsesX
    let reponsesX = questionObjX.options;
    let reponseA = reponsesX[0];
    let reponseB = reponsesX[1];
    let reponseC = reponsesX[2];
    let reponseD = reponsesX[3];
    affRA.textContent = reponseA;
    affRB.textContent = reponseB;
    affRC.textContent = reponseC;
    affRD.textContent = reponseD;
}

// Evenement Click
let tableauButton = [affRA, affRB, affRC, affRD];
tableauButton.forEach((rep, index) =>{
    rep.addEventListener("click", () => {
        rep.value === questionObjX.correct_answer
            ? (score = math.evaluate(score + 1),
                numeroQ ++,
                affScore.textContent = score + "/" + numeroQ,
                verifFin())
        
            : (numeroQ++,
                affScore.textContent = score + "/" + numeroQ,
                verifFin())
        
    })
    
})

// fonction vérification fin de partie
function verifFin(){
    numeroQ === 8
        ? fctFinPartie()
        : scriptQuizz()
}

// fonction fin  de partie
function fctFinPartie(){
    affQ.textContent ="";
    affRA.textContent="";
    affRB.textContent="";
    affRC.textContent="";
    affRD.textContent="";
    let finPartie = document.getElementById("finPartie")
    finPartie.textContent = "La partie est finnie votre score est de: " + score + "/" + numeroQ++;
}

scriptQuizz();