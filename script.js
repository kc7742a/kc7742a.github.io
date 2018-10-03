window.addEventListener("click", wake);
window.addEventListener("keydown", wake);


/* Particles */
var particleToggle = document.getElementById("particle-toggle");
var particlesEnabled = true;
particleToggle.addEventListener("click", particleButtonClick);


function particleButtonClick() {
    if (particlesEnabled === true) {
        particleToggle.textContent = "Particles: Off";
        particlesEnabled = false;
    } else {
        particleToggle.textContent = "Particles: On";
        particlesEnabled = true;
    }

}

var audio = new Audio();

var id;
var count = 0;

function imageClick() {
    //audio.src = ();
    //audio.play();
    if (count === 0 && particlesEnabled === true) {
        id = setInterval(boneParticles, 2);
    }
}

function wake() {
    window.removeEventListener("click", wake);
    window.removeEventListener("keydown", wake);
    document.getElementById("password-input").className += " fade";
    window.addEventListener("keydown", login);
}


var blink = false;

function login(event) {
    if (event.key == "Enter") {
        if (document.getElementById("password-input").value === "dietz") {
            window.removeEventListener("keydown", login);
            var password = document.getElementById("password-input");
            password.value = '';
            password.style.display = "none";
            document.getElementById("overlay").style.display = "none";
            var error = document.getElementById("password-error");
            error.style.display = "none";

            document.getElementById("dog-image").addEventListener("click", imageClick);
        } else {
            document.getElementById("password-error").style.display = "block";
            if (blink === false) {
            document.getElementById("password-error").className += " blink";
            blink = true;
            }
            document.getElementById("password").value = '';
        }
    }
}

function boneParticles() {
    if (count >= 250) {
        clearInterval(id);
        count = 0;
        console.log("done adding bones");
    } else {
        console.log("adding bones");
        var element = document.createElement("IMG");
        var randomSize = Math.floor(Math.random() * (40 - 10 + 1)) + 10;
        var randomLeft = Math.floor(Math.random() * ((300 - randomSize) + 1)) + "px";
        var randomTop = Math.floor(Math.random() * ((300 - randomSize) + 1)) + "px";
        element.style.position = "absolute";
        element.src = "images/milkbone.png";
        element.width = randomSize;
        element.style.left = randomLeft;
        element.style.top = randomTop;

        var addTo = document.getElementById("particle-area");
        addTo.appendChild(element);

        setTimeout(function(){
            addTo.removeChild(element);
        }, 3000);
    count++;
    }
}
