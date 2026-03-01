// 3D Tilt Effect
const tilt = document.getElementById("tilt");

document.addEventListener("mousemove", (e) => {
    let x = (window.innerWidth / 2 - e.pageX) / 40;
    let y = (window.innerHeight / 2 - e.pageY) / 40;
    tilt.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

// Smooth Scrolling
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});