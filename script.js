// Create confetti
function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#f8a4b8', '#ff6b81', '#f7c5cc', '#e84393', '#fd79a8'];

    for (let i = 0; i < 40; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (Math.random() * 3 + 3) + 's';
        piece.style.animationDelay = Math.random() * 5 + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (Math.random() * 6 + 4) + 'px';
        piece.style.height = (Math.random() * 6 + 4) + 'px';
        container.appendChild(piece);
    }
}

createConfetti();

// Crying/sad stickers for each "No" click
const sadGifs = [
    'https://media.giphy.com/media/OPU6wzx8JrHna/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzZsc2k0Zmd3OXZkcjNubGs1NXUzNzJ5eThxbWM5ZDUxZTdjajg1NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/98MaHVwJOmWMz4cz1K/giphy.gif',
    'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnMzY2hrZ3Vnd2EwdmxtMXl1Ym40Y2RtbDF6ejUwbjRqem9mbmZiZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BEob5qwFkSJ7G/giphy.gif',
    'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTBsbmg2MGMzem9jaGx3YTJmeDQ0a2V1bmo3MWM5MDdkbDBpeXo3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4V3RuU0zSq1SC8Hh4x/giphy.gif',
    'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3h3eDk2ejJteHFvMzhuMDk2a3c5dGZqaDZoOWdieGZlMjlybHV4eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fdiOoSR8omN5RO36Yo/giphy.gif',
    'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExazV6czMzY2EwYjBpYWl2OXh4aTRleG41bGI0b3FsYm0yYTVxc3J3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ghXitlPhJSsMzpAQvD/giphy.gif',
    'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWQwZTJobmwwcTVqMWtpZGYwOTIweHVhZGN3Mm15N2s2bm05aWY0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9KI8vyCCAOqHbcMYd2/giphy.gif',
];

// Kissing bear sticker when she says yes (the original one)
const yesGif = 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNndxaGdzNDIzOXR0cm1kd3FpNXF1eTlpdjdma200YjhqOHBjcDNxNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mRvzQIDr0gHCz82SV0/giphy.gif';

let noCount = 0;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const bearGif = document.getElementById('bearGif');

const noMessages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Pls? 🥺",
    "Pretty pls?",
    "With a cherry on top?",
    "Don't do this to me 😢",
    "I'll be sad 🥺",
    "I'll cry... 😭",
    "You're breaking my heart 💔",
];

// Base sizes
let yesFontSize = 1.2;
let yesPaddingV = 14;
let yesPaddingH = 40;
let noPaddingV = 14;
let noPaddingH = 40;
let noFontSize = 1.2;

function sayNo() {
    noCount++;

    // Change the sticker each time
    const gifIndex = noCount % sadGifs.length;
    bearGif.src = sadGifs[gifIndex];

    // Grow the Yes button A LOT bigger each click
    yesFontSize += 0.8;
    yesPaddingV += 18;
    yesPaddingH += 40;
    yesBtn.style.fontSize = yesFontSize + 'rem';
    yesBtn.style.padding = yesPaddingV + 'px ' + yesPaddingH + 'px';

    // Shrink the No button to tiny
    noFontSize = Math.max(0.4, noFontSize - 0.12);
    noPaddingV = Math.max(2, noPaddingV - 2);
    noPaddingH = Math.max(6, noPaddingH - 6);
    noBtn.style.fontSize = noFontSize + 'rem';
    noBtn.style.padding = noPaddingV + 'px ' + noPaddingH + 'px';

    // Change the No button text
    if (noCount < noMessages.length) {
        noBtn.textContent = noMessages[noCount];
    } else {
        noBtn.textContent = "Just say Yes! 😭";
    }
}

function sayYes() {
    // Change to happy sticker
    bearGif.src = yesGif;
    bearGif.style.width = '220px';

    // Remove buttons and show celebration
    document.getElementById('questionText').textContent = 'Yaaay! 🎉💖';
    document.getElementById('buttonsContainer').innerHTML =
        '<p class="celebration">I knew you\'d say yes! 😘💕</p>';

    // Add extra confetti celebration
    const container = document.getElementById('confetti');
    const colors = ['#f8a4b8', '#ff6b81', '#f7c5cc', '#e84393', '#fd79a8', '#ff0044', '#ff4d6d'];
    for (let i = 0; i < 60; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
        piece.style.animationDelay = Math.random() * 1 + 's';
        piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
        piece.style.width = (Math.random() * 8 + 5) + 'px';
        piece.style.height = (Math.random() * 8 + 5) + 'px';
        container.appendChild(piece);
    }
}
