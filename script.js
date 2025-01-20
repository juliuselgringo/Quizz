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
let reponseA = document.createElement("button");
let reponseB = document.createElement("button");
let reponseC = document.createElement("button");
let reponseD = document.createElement("button");

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
    reponseA.textContent= reponsesX[0];
    reponseA.value = "A)";
    reponseA.style.display = "block";
    affReponses.append(reponseA);

    reponseB.textContent = reponsesX[1];
    reponseB.value = "B)";
    reponseB.style.display = "block";
    affReponses.append(reponseB);
    
    reponseC.textContent = reponsesX[2];
    reponseC.value="C)";
    reponseC.style.display = "block";
    affReponses.append(reponseC);

    reponseD.textContent = reponsesX[3];
    reponseD.value = "D)";
    reponseD.style.display = "block";
    affReponses.append(reponseD);
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

    let finPartie = document.getElementById("finPartie")
    finPartie.textContent = "La partie est finnie votre score est de: " + score + "/" + numeroQ++;
}

scriptQuizz();