const game = document.getElementById('game');
const character = document.getElementById('character');
const block = document.getElementById('block');
let counter = 0;

function jump() {
    if(character.classLit != "animate") {
        character.classList.add('animate');
    }
    setTimeout(() => {
        character.classList.remove('animate');
        counter++;
    }, 500);
}

const checkDead = setInterval(function() {
    const characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("Game Over");
    };
});

game.addEventListener('click', jump);