import '@material/web/button/filled-button.js';

document.querySelector("#main-button").addEventListener("click", onButtonClick);

function onButtonClick() {
    let label = document.querySelector("#text-control");
    let img = document.querySelector(".img");

    if(img.classList.contains("hidden")) {
        img.classList.remove("hidden");
    } else {
        img.classList.add("hidden");
    }

    if(label.classList.contains("hidden")) {
        label.classList.remove("hidden");
    } else {
        label.classList.add("hidden");
    }
}