const btn = document.getElementById("myBtn");
const spoiler = document.getElementById("spoiler");

let isListenerActive = false;

function keyListener(event) {
    if (event.key === "Escape") {
        spoiler.classList.remove("open");
    }
    document.removeEventListener('keydown', keyListener);
    isListenerActive = false;
}

function myClick() {
    spoiler.classList.toggle("open");
    isListenerActive ? document.removeEventListener('keydown', keyListener) : document.addEventListener('keydown', keyListener);
    isListenerActive = !isListenerActive;
}
btn.addEventListener('click', myClick);