// ================================
// PORTAFOLIO - SCRIPT.JS
// ================================

// Año automático en el footer
const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} | Portafolio Académico | Lenin Fabricio Macas Cabrera`;
}


// ================================
// MENÚ ACTIVO AL HACER SCROLL
// ================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// ANIMACIÓN DE TARJETAS
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .2

});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".7s";

    observer.observe(card);

});


// ================================
// BOTÓN VOLVER ARRIBA
// ================================

const btnTop = document.createElement("button");

btnTop.innerHTML = "↑";

btnTop.id = "btnTop";

document.body.appendChild(btnTop);

btnTop.style.position = "fixed";
btnTop.style.bottom = "25px";
btnTop.style.right = "25px";
btnTop.style.width = "50px";
btnTop.style.height = "50px";
btnTop.style.borderRadius = "50%";
btnTop.style.border = "none";
btnTop.style.background = "#1565c0";
btnTop.style.color = "white";
btnTop.style.fontSize = "22px";
btnTop.style.cursor = "pointer";
btnTop.style.display = "none";
btnTop.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
btnTop.style.transition = ".3s";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btnTop.style.display = "block";

    } else {

        btnTop.style.display = "none";

    }

});

btnTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ================================
// EFECTO HOVER EN BOTÓN
// ================================

btnTop.addEventListener("mouseenter", () => {

    btnTop.style.transform = "scale(1.1)";

});

btnTop.addEventListener("mouseleave", () => {

    btnTop.style.transform = "scale(1)";

});


// ================================
// MENSAJE EN CONSOLA
// ================================

console.log("Portafolio cargado correctamente.");
