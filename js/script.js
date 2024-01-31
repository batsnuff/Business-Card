document.addEventListener("DOMContentLoaded", function() {
  night();
});

function night(){
 let night = document.querySelector(".main");
 night.classList.toggle("night");
 let background = document.querySelector("body");
 background.classList.toggle("change");
 if (background.classList.contains("change")) {
    background.style.backgroundImage = "url('https://th.bing.com/th/id/OIG2.yCWzhLKw08L8560QOpOh?pid=ImgGn')";
 } else {
    background.style.backgroundImage = "none";
 }
}

function openCodedCV() {
    window.open('https://batsnuff.github.io/my-coded-CV/', '_blank')
  }

function openLinkedin() {
  window.open('https://www.linkedin.com/in/miłosz-szczepaniak-1708b9178/', '_blank');
}

function openGitHub() {
    window.open('https://github.com/batsnuff', '_blank');
}

function openInstagram() {
    window.open('https://www.instagram.com/batsnuff/', '_blank')
}

function openTelegram() {
    window.open('https://t.me/batsnuff', '_blank')
}
