window.addEventListener("load", (e) => scrollCall(), false);

function scrollCall() {
    var body = document.querySelector("body");
    var navBar = document.querySelector("#navbar");
    var title = document.querySelector("#home-title span")

    var imgHeight = parseInt(getComputedStyle(body).getPropertyValue('--img-height'));
    var navHeight =parseInt(getComputedStyle(body).getPropertyValue('--nav-height'))
    const phaseOut = 300;

    title.style.opacity = Math.max(((phaseOut-this.scrollY)/phaseOut)**3,0);
    console.log(navHeight);
    if (this.scrollY > imgHeight - navHeight) {
        navBar.style.backgroundColor = "var(--main)";
    } else {
        navBar.style.backgroundColor = "transparent";
    }
}

window.addEventListener("scroll", (e) => scrollCall(), false);
