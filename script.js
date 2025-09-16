// NAVBAR TOGGLE
function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

// TYPEWRITER EFFECT
const texts = ["Java Programmer", "Web Developer", "Full-Stack Enthusiast"];
const textElement = document.querySelector(".typewriter-text");

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenWords = 1000;

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(eraseText, delayBetweenWords);
  }
}

function eraseText() {
  if (textElement.innerHTML.length > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    setTimeout(eraseText, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;
