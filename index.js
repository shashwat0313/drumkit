const sounds = [];

sounds[0] = new Audio('sounds/tom-1.mp3');
sounds[1] = new Audio('sounds/tom-2.mp3');
sounds[2] = new Audio('sounds/tom-3.mp3');
sounds[3] = new Audio('sounds/tom-4.mp3');
sounds[4] = new Audio('sounds/snare.mp3');
sounds[6] = new Audio('sounds/kick-bass.mp3');
sounds[5] = new Audio('sounds/crash.mp3');

function playsound(key){
    switch (key) {
        case 'w':
            sounds[0].play();
            break;
        case 'a':
            sounds[1].play();
            break;
        case 's':
            sounds[2].play();
            break;
        case 'd':
            sounds[3].play();
            break;
        case 'j':
            sounds[4].play();
            break;
        case 'k':
            sounds[5].play();
            break;
        case 'l':
            sounds[6].play();
            break;    
        default:
            break;
    }
}

var handles = document.querySelectorAll(".drum");

//places handles on each button
for(let i = 0; i < 7; i++){
    handles[i].addEventListener("click", ClickHandler);

}

function ClickHandler(){
    var value = this.innerHTML;

    switch (value) {
        case 'w':
            sounds[0].play();
            break;
        case 'a':
            sounds[1].play();
            break;
        case 's':
            sounds[2].play();
            break;
        case 'd':
            sounds[3].play();
            break;
        case 'j':
            sounds[4].play();
            break;
        case 'k':
            sounds[5].play();
            break;
        case 'l':
            sounds[6].play();
            break;    
        default:
            break;
    }
}

handles[0].style.backgroundImage = "url(images/tom1.png)";
handles[1].style.backgroundImage = "url(images/tom2.png)";
handles[2].style.backgroundImage = "url(images/tom3.png)";
handles[3].style.backgroundImage = "url(images/tom4.png)";
handles[4].style.backgroundImage = "url(images/snare.png)";
handles[5].style.backgroundImage = "url(images/crash.png)";
handles[6].style.backgroundImage = "url(images/kick.png)";

document.addEventListener("keydown", (x)=>{
    switch (x.key) {
        case 'w':
            sounds[0].play();
            break;
        case 'a':
            sounds[1].play();
            break;
        case 's':
            sounds[2].play();
            break;
        case 'd':
            sounds[3].play();
            break;
        case 'j':
            sounds[4].play();
            break;
        case 'k':
            sounds[5].play();
            break;
        case 'l':
            sounds[6].play();
            break;    
        default:
            break;
    }
})
