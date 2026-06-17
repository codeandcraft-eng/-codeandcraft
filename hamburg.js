document.addEventListener("DOMContentLoaded", () => {
    // Inicializa os recursos do site
    initMobileMenu();
    initScrollAnimations();
});

// 1. Controle do Menu Hambúrguer
function initMobileMenu() {
    const btnHamburguer = document.querySelector(".menu-hamburguer");
    const navMenu = document.querySelector(".menu-navegacao");
    const navLinks = document.querySelectorAll(".menu-navegacao a");

    if (!btnHamburguer || !navMenu) return;

    btnHamburguer.addEventListener("click", () => {
        btnHamburguer.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            btnHamburguer.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
}

// 2. Animação de Entrada dos Cards (Intersection Observer)
function initScrollAnimations() {
    const cards = document.querySelectorAll(".card, .card-ramo");
    
    if (cards.length === 0) return;

    // Configura o estado inicial invisível dos cards via JS
    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
    });

    // Cria o observador que detecta quando o card aparece na tela
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Roda a animação apenas uma vez
            }
        });
    }, { 
        threshold: 0.1, // Dispara quando 10% do card estiver visível
        rootMargin: "0px 0px -50px 0px" // Dispara um pouco antes de entrar totalmente
    });

    cards.forEach(card => observer.observe(card));
}
