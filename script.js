// =======================
// ELEMENTS
// =======================

const start = document.getElementById("start");
const music = document.getElementById("music");

const scenes = document.querySelectorAll(".scene");

const hearts = document.getElementById("hearts");

const img1 = document.getElementById("friend1");
const img2 = document.getElementById("friend2");
const img3 = document.getElementById("friend3");

// =======================
// PHOTOS
// =======================

const friend1 = [
"photos/f1-1.jpg",
"photos/f1-2.jpg",
"photos/f1-3.jpg"
];

const friend2 = [
"photos/f2-1.jpg",
"photos/f2-2.jpg",
"photos/f2-3.jpg"
];

const friend3 = [
"photos/f3-1.jpg",
"photos/f3-2.jpg",
"photos/f3-3.jpg"
];

// =======================
// START
// =======================

start.onclick = () => {

start.style.opacity = "0";

setTimeout(() => {

start.style.display = "none";

},800);

// Play music

music.play().catch(()=>{});

runShow();

};

// =======================
// SCENES
// =======================

let current = 0;

function showScene(index){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

scenes[index].classList.add("active");

}

// =======================
// PHOTO CHANGE
// =======================

function slideshow(image,photos){

let i=0;

image.src=photos[0];

const slide=setInterval(()=>{

i++;

if(i>=photos.length){

clearInterval(slide);

return;

}

image.style.opacity="0";

setTimeout(()=>{

image.src=photos[i];

image.style.opacity="1";

},250);

},1500);

}

// =======================
// MAIN SHOW
// =======================

function runShow(){

// Intro
showScene(0);

// Friend 1
setTimeout(()=>{

showScene(1);

slideshow(img1,friend1);

},2000);

// Friend 2
setTimeout(()=>{

showScene(2);

slideshow(img2,friend2);

},8000);

// Friend 3
setTimeout(()=>{

showScene(3);

slideshow(img3,friend3);

},14000);

// Ending
setTimeout(()=>{

showScene(4);

confetti();

},20000);

}

// =======================
// HEARTS
// =======================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*20)+"px";

heart.style.animationDuration=(4+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

},450);

// =======================
// CONFETTI
// =======================

function confetti(){

for(let i=0;i<120;i++){

const c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="14px";

c.style.left=Math.random()*100+"vw";

c.style.top="-20px";

c.style.background=`hsl(${Math.random()*360},100%,60%)`;

c.style.transform=`rotate(${Math.random()*360}deg)`;

c.style.zIndex="999";

document.body.appendChild(c);

let y=-20;

const speed=2+Math.random()*4;

const fall=setInterval(()=>{

y+=speed;

c.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(fall);

c.remove();

}

},20);

}

}
