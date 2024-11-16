var buttons = document.querySelectorAll(".drum");
var tom1 = new Audio('./sounds/tom-1.mp3');
var tom2 = new Audio('./sounds/tom-2.mp3');
var tom3 = new Audio('./sounds/tom-3.mp3');
var tom4 = new Audio('./sounds/tom-4.mp3');
var crash = new Audio('./sounds/crash.mp3');
var kick = new Audio('./sounds/kick-bass.mp3');
var snare = new Audio('./sounds/snare.mp3');

for(var x = 0; x < buttons.length; x++) {
    buttons[x].addEventListener("click", function () {
        makeSound(this.innerHTML)
    });
}

document.addEventListener("keydown", function (e) {
    makeSound(e.key);
});

function makeSound(key) {
    switch (key){
        case "w":
            tom1.play();
            break;
        case "a":
            tom3.play();
            break;
        case "s":
            tom4.play();
            break;
        case "d":
            tom2.play();
            break;
        case "j":
            crash.play();
            break;
        case "k":
            kick.play();
            break;
        case "l":
            snare.play();
            break;
        default:
            console.log(e);
            break;
    }
}