const startBtn = document.getElementById("startMission");

const mission1 = document.getElementById("mission1");
const mission2 = document.getElementById("mission2");
const mission3 = document.getElementById("mission3");
const finalMission = document.getElementById("finalMission");

const scoreText = document.getElementById("score");
const heartArea = document.getElementById("heartArea");

const result = document.getElementById("result");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const successPopup = document.getElementById("successPopup");

let score = 0;

/* =====================
   START MISSION
===================== */

startBtn.addEventListener("click", () => {

    document.querySelector(".hero").style.display = "none";

    mission1.classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================
   MISSION 1
===================== */

document.querySelector(".correct")
.addEventListener("click", () => {

    alert("Jawaban benar 😎");

    mission1.classList.add("hidden");
    mission2.classList.remove("hidden");

    startHeartGame();

});

document.querySelectorAll(".wrong")
.forEach(btn => {

    btn.addEventListener("click", () => {

        alert("Hmm... kayaknya kurang tepat 🤨");

    });

});


/* =====================
   HEART GAME
===================== */

function startHeartGame(){

    heartArea.innerHTML = "";

    for(let i=0;i<10;i++){

        createHeart();

    }

}

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left =
        Math.random()*90 + "%";

    heart.style.top =
        Math.random()*80 + "%";

    heart.addEventListener("click", () => {

        heart.remove();

        score++;

        scoreText.innerText = score;

        if(score >= 10){

            setTimeout(() => {

                mission2.classList.add("hidden");

                mission3.classList.remove("hidden");

                runAnalysis();

            }, 500);

        }

    });

    heartArea.appendChild(heart);

}


/* =====================
   ANALISA TARGET
===================== */

function runAnalysis(){

    result.innerHTML = "";

    const lines = [

        "> Memeriksa database...",
        "> Menemukan target...",
        "> Mengukur tingkat kelucuan...",
        "> Menghitung kemungkinan jalan bareng...",
        "> TARGET DITEMUKAN!",
        "",
        "😳 Ahmad ternyata mau ngajak Dea jalan..."
    ];

    let i = 0;

    const interval = setInterval(() => {

        result.innerHTML +=
        lines[i] + "<br>";

        i++;

        if(i >= lines.length){

            clearInterval(interval);

            setTimeout(() => {

                mission3.classList.add("hidden");

                finalMission.classList.remove("hidden");

            }, 2500);

        }

    }, 1000);

}


/* =====================
   TOMBOL KABUR
===================== */

function moveButton(){

    const maxX =
        window.innerWidth - 180;

    const maxY =
        window.innerHeight - 100;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.position = "fixed";

    noBtn.style.left =
        randomX + "px";

    noBtn.style.top =
        randomY + "px";

}

noBtn.addEventListener(
    "mouseover",
    moveButton
);

noBtn.addEventListener(
    "click",
    moveButton
);


/* =====================
   MAU
===================== */

yesBtn.addEventListener("click", () => {

    successPopup.style.display = "flex";

    createConfetti();

});


/* =====================
   CONFETTI
===================== */

function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti =
            document.createElement("div");

        confetti.style.position = "fixed";

        confetti.style.left =
            Math.random()*100 + "vw";

        confetti.style.top =
            "-20px";

        confetti.style.width =
            "10px";

        confetti.style.height =
            "10px";

        confetti.style.background =
            `hsl(${Math.random()*360},
            100%,50%)`;

        confetti.style.zIndex = 99999;

        confetti.style.borderRadius = "50%";

        document.body.appendChild(confetti);

        let fall =
            Math.random()*5+3;

        confetti.animate(

        [
            {
                transform:
                "translateY(0)"
            },

            {
                transform:
                `translateY(
                ${window.innerHeight+200}px)`
            }

        ],

        {
            duration:
            fall*1000,

            iterations:1
        });

        setTimeout(() => {

            confetti.remove();

        }, fall*1000);

    }

  }
