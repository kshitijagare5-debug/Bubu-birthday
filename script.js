"use strict";

/*=========================================
PROJECT STARDUST V5
SCRIPT.JS PART 1
=========================================*/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/*=========================================
DOM
=========================================*/

const loader = $("#loader");
const loadingProgress = $("#loadingProgress");

const startJourney = $("#startJourney");
const countdownSection = $("#countdownSection");

const musicToggle = $("#musicToggle");
const bgMusic = $("#bgMusic");

const scrollTopBtn = $("#scrollTop");

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    let progress = 0;

    const timer = setInterval(() => {

        progress++;

        if (loadingProgress) {
            loadingProgress.style.width = progress + "%";
        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {

                if (loader) {

                    loader.style.opacity = "0";
                    loader.style.pointerEvents = "none";

                    setTimeout(() => {
                        loader.remove();
                    }, 600);

                }

            }, 300);

        }

    }, 18);

});

/*=========================================
BEGIN JOURNEY
=========================================*/

if (startJourney && countdownSection) {

    startJourney.addEventListener("click", () => {

        countdownSection.scrollIntoView({

            behavior: "smooth",
            block: "start"

        });

    });

}

/*=========================================
MUSIC
=========================================*/

let musicPlaying = false;

if (musicToggle && bgMusic) {

    musicToggle.addEventListener("click", async () => {

        try {

            if (!musicPlaying) {

                await bgMusic.play();

                musicPlaying = true;

                musicToggle.innerHTML =
                    '<i class="fa-solid fa-pause"></i>';

            } else {

                bgMusic.pause();

                musicPlaying = false;

                musicToggle.innerHTML =
                    '<i class="fa-solid fa-music"></i>';

            }

        } catch (err) {

            console.error(err);

        }

    });

}

/*=========================================
SCROLL TO TOP
=========================================*/

window.addEventListener("scroll", () => {

    if (!scrollTopBtn) return;

    if (window.scrollY > 500) {

        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";

    } else {

        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";

    }

});

if (scrollTopBtn) {

    scrollTopBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    });

}

console.log("✅ Project Stardust V5 - JS Part 1 Loaded");
/*=========================================
PROJECT STARDUST V5
SCRIPT.JS PART 2
COUNTDOWN + MEMORY
=========================================*/

/*=========================================
COUNTDOWN
=========================================*/

const daysEl=$("#days");
const hoursEl=$("#hours");
const minutesEl=$("#minutes");
const secondsEl=$("#seconds");

const birthday=new Date("July 28, 2026 00:00:00").getTime();

function updateCountdown(){

const now=Date.now();

let distance=birthday-now;

if(distance<0){

distance=0;

}

const days=Math.floor(distance/(1000*60*60*24));

const hours=Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);

const minutes=Math.floor(
(distance%(1000*60*60))/(1000*60)
);

const seconds=Math.floor(
(distance%(1000*60))/1000
);

if(daysEl) daysEl.textContent=String(days).padStart(2,"0");
if(hoursEl) hoursEl.textContent=String(hours).padStart(2,"0");
if(minutesEl) minutesEl.textContent=String(minutes).padStart(2,"0");
if(secondsEl) secondsEl.textContent=String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
MEMORY CARDS
=========================================*/

const memoryCards=$$(".memoryCard");

memoryCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="";

});

card.addEventListener("click",()=>{

card.animate([

{
transform:"scale(1)"
},

{
transform:"scale(.95)"
},

{
transform:"scale(1)"
}

],{

duration:250

});

});

});

/*=========================================
PHOTO CONSTELLATION
=========================================*/

const photoCards=$$(".photoGrid img");

photoCards.forEach(photo=>{

photo.addEventListener("click",()=>{

photo.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.08)"
},

{
transform:"scale(1)"
}

],{

duration:350

});

});

});

/*=========================================
SMOOTH SECTION FADE
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([

{
opacity:0,
transform:"translateY(40px)"
},

{
opacity:1,
transform:"translateY(0)"
}

],{

duration:700,
fill:"forwards"

});

observer.unobserve(entry.target);

}

});

},{
threshold:.15
});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

/*=========================================
PARALLAX HERO
=========================================*/

window.addEventListener("scroll",()=>{

const hero=$("#hero");

if(!hero) return;

const y=window.scrollY;

hero.style.backgroundPosition=`center ${y*0.35}px`;

});

console.log("✅ Part 2 Loaded");
/*=========================================
PROJECT STARDUST V5
SCRIPT.JS PART 3
REASONS • GIFTS • SECRET SIGNAL
=========================================*/

/*=========================================
28 REASONS
=========================================*/

const reasonTitle=$("#reasonTitle");
const reasonText=$("#reasonText");
const nextReason=$("#nextReason");

const reasons=[

"You make ordinary days feel magical. ❤️",
"Your smile is my favourite sunrise. ☀️",
"You always make life brighter. ✨",
"You understand me without words.",
"You inspire me to become better.",
"You make every memory unforgettable.",
"Your laugh is my favourite melody.",
"You bring peace to my chaos.",
"You make every conversation special.",
"You always care for people.",
"You are beautiful inside and out.",
"You never stop amazing me.",
"You make me smile without trying.",
"You are my comfort place.",
"You are my biggest blessing.",
"You make every day worth living.",
"You believe in me.",
"You make small moments precious.",
"You are stronger than you know.",
"You are incredibly kind.",
"You make life adventurous.",
"You make my heart feel at home.",
"You make dreams feel possible.",
"You deserve endless happiness.",
"You are one in billions.",
"You are my favourite person.",
"You are my forever.",
"And I'll always choose you. ❤️"

];

let reasonIndex=0;

if(nextReason){

nextReason.addEventListener("click",()=>{

reasonTitle.textContent=`Reason #${reasonIndex+1}`;

reasonText.textContent=reasons[reasonIndex];

reasonIndex++;

if(reasonIndex>=reasons.length){

reasonIndex=0;

}

});

}

/*=========================================
GIFT MODAL
=========================================*/

const giftModal=$("#giftModal");
const closeGift=$("#closeGift");

const giftEmoji=$("#giftEmoji");
const giftHeading=$("#giftHeading");
const giftContent=$("#giftContent");

const giftCards=$$(".giftCard");

const giftData=[

{
emoji:"🎁",
title:"Gift One",
text:"A hug filled with endless love."
},

{
emoji:"🌸",
title:"Gift Two",
text:"A garden full of happiness."
},

{
emoji:"💌",
title:"Gift Three",
text:"A handwritten letter from my heart."
},

{
emoji:"💖",
title:"Gift Four",
text:"Infinite love and beautiful memories."
},

{
emoji:"🎂",
title:"Final Surprise",
text:"Happy Birthday Priyal ❤️"
}

];

giftCards.forEach(card=>{

card.addEventListener("click",()=>{

const index=parseInt(card.dataset.gift)-1;

giftEmoji.textContent=giftData[index].emoji;

giftHeading.textContent=giftData[index].title;

giftContent.textContent=giftData[index].text;

giftModal.style.display="flex";

});

});

if(closeGift){

closeGift.addEventListener("click",()=>{

giftModal.style.display="none";

});

}

if(giftModal){

giftModal.addEventListener("click",(e)=>{

if(e.target===giftModal || e.target.classList.contains("modalOverlay")){

giftModal.style.display="none";

}

});

}

/*=========================================
SECRET SIGNAL
=========================================*/

const unlockSignal=$("#unlockSignal");

if(unlockSignal){

unlockSignal.addEventListener("click",()=>{

unlockSignal.textContent="❤️ I Love You Forever ❤️";

unlockSignal.disabled=true;

unlockSignal.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.08)"
},

{
transform:"scale(1)"
}

],{

duration:500

});

});

}

console.log("✅ Part 3 Loaded");
/*=========================================
PROJECT STARDUST V5
SCRIPT.JS PART 4
LETTER • TYPEWRITER • MEMORY BOOK
=========================================*/

/*=========================================
LETTER
=========================================*/

const openLetter=$("#openLetter");
const letterEnvelope=$("#letterEnvelope");
const typeWriter=$("#typeWriterText");

const letterMessage=`

My Dearest Priyal ❤️,

Happy Birthday to the most beautiful person
I've ever known.

Thank you for bringing happiness,
peace,
laughter,
and love into my life.

No matter where life takes us,
I'll always wish for your smile,
your dreams,
and your happiness.

I hope this birthday becomes one
of the most beautiful memories
of your life.

Happy Birthday once again...

Forever Yours,

Kshitij ❤️

`;

let typingStarted=false;

function typeLetter(){

if(!typeWriter || typingStarted) return;

typingStarted=true;

typeWriter.textContent="";

let i=0;

const timer=setInterval(()=>{

typeWriter.textContent+=letterMessage.charAt(i);

i++;

if(i>=letterMessage.length){

clearInterval(timer);

}

},30);

}

if(openLetter && letterEnvelope){

openLetter.addEventListener("click",()=>{

letterEnvelope.classList.add("opened");

setTimeout(typeLetter,700);

openLetter.disabled=true;

openLetter.innerHTML=
'<i class="fa-solid fa-heart"></i> Letter Opened';

});

}

/*=========================================
MEMORY BOOK
=========================================*/

const bookCards=$$(".bookCard");

bookCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.animate([

{
transform:"translateY(0)"
},

{
transform:"translateY(-10px)"
}

],{

duration:250,
fill:"forwards"

});

});

card.addEventListener("mouseleave",()=>{

card.animate([

{
transform:"translateY(-10px)"
},

{
transform:"translateY(0)"
}

],{

duration:250,
fill:"forwards"

});

});

});

/*=========================================
PHOTO GLOW
=========================================*/

const galleryPhotos=$$(".photoGrid img");

galleryPhotos.forEach(photo=>{

photo.addEventListener("click",()=>{

galleryPhotos.forEach(p=>{

p.style.opacity=".45";

});

photo.style.opacity="1";

photo.style.boxShadow=
"0 0 35px rgba(255,79,152,.55)";

setTimeout(()=>{

galleryPhotos.forEach(p=>{

p.style.opacity="1";

p.style.boxShadow="";

});

},1200);

});

});

/*=========================================
PROMISE CARD
=========================================*/

const promiseCard=$(".promiseCard");

if(promiseCard){

promiseCard.addEventListener("click",()=>{

promiseCard.animate([

{
transform:"scale(1)"
},

{
transform:"scale(1.03)"
},

{
transform:"scale(1)"
}

],{

duration:450

});

});

}

console.log("✅ Part 4 Loaded");
/*=========================================
PROJECT STARDUST V5
SCRIPT.JS PART 5
CAKE • CANDLES • BALLOONS • FIREWORKS
=========================================*/

const blowBtn = $("#blowCandles");
const candles = $$(".candle");
const balloons = $$(".balloon");

const fireworkCanvas = $("#fireworksCanvas");
const fireworkSound = $("#fireworkSound");
const popSound = $("#popSound");

let birthdayCelebrated = false;

/*=========================================
BALLOONS
=========================================*/

function releaseBalloons() {

    balloons.forEach((balloon, index) => {

        balloon.style.animationPlayState = "running";

        balloon.style.animationDelay = `${index * 0.25}s`;

    });

}

/*=========================================
FIREWORKS
=========================================*/

let ctx;

if (fireworkCanvas) {

    ctx = fireworkCanvas.getContext("2d");

    function resizeCanvas() {

        fireworkCanvas.width = window.innerWidth;
        fireworkCanvas.height = window.innerHeight;

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

}

function random(min, max) {

    return Math.random() * (max - min) + min;

}

function burst(x, y) {

    if (!ctx) return;

    const particles = [];

    for (let i = 0; i < 70; i++) {

        particles.push({

            x,

            y,

            dx: random(-5, 5),

            dy: random(-5, 5),

            alpha: 1,

            size: random(2, 5)

        });

    }

    function animate() {

        ctx.clearRect(
            0,
            0,
            fireworkCanvas.width,
            fireworkCanvas.height
        );

        particles.forEach(p => {

            p.x += p.dx;

            p.y += p.dy;

            p.dy += 0.04;

            p.alpha -= 0.012;

            ctx.globalAlpha = Math.max(p.alpha, 0);

            ctx.beginPath();

            ctx.arc(
                p.x,
                p.y,
                p.size,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                `hsl(${Math.random()*360},100%,60%)`;

            ctx.fill();

        });

        ctx.globalAlpha = 1;

        if (particles.some(p => p.alpha > 0)) {

            requestAnimationFrame(animate);

        } else {

            ctx.clearRect(
                0,
                0,
                fireworkCanvas.width,
                fireworkCanvas.height
            );

        }

    }

    animate();

}

/*=========================================
CELEBRATION
=========================================*/

if (blowBtn) {

    blowBtn.addEventListener("click", () => {

        if (birthdayCelebrated) return;

        birthdayCelebrated = true;

        candles.forEach(candle => {

            candle.classList.add("blown");

        });

        releaseBalloons();

        if (popSound) {

            popSound.currentTime = 0;

            popSound.play().catch(() => {});

        }

        setTimeout(() => {

            burst(
                window.innerWidth * 0.3,
                window.innerHeight * 0.35
            );

        }, 200);

        setTimeout(() => {

            burst(
                window.innerWidth * 0.5,
                window.innerHeight * 0.25
            );

        }, 600);

        setTimeout(() => {

            burst(
                window.innerWidth * 0.7,
                window.innerHeight * 0.35
            );

        }, 1000);

        if (fireworkSound) {

            setTimeout(() => {

                fireworkSound.currentTime = 0;

                fireworkSound.play().catch(()=>{});

            }, 400);

        }

        blowBtn.disabled = true;

        blowBtn.innerHTML =
"<i class='fa-solid fa-check'></i> Wish Completed ❤️";

    });

}

console.log("✅ Part 5 Loaded");
