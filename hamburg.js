alert("O JavaScript está funcionando!");
const CodeCraftApp = {
    elements: {
        header: document.querySelector("header"),
        cardsServicos: document.querySelectorAll(".card"),
        cardsRamos: document.querySelectorAll(".card-ramo"),
        btnWhats: document.querySelector(".btn-whatsapp"),
        btnHero: document.querySelector(".btn-principal"),
        // Novos elementos para o menu hambúrguer:
        btnHamburguer: document.querySelector(".menu-hamburguer"),
        navMenu: document.querySelector(".menu-navegacao"),
        navLinks: document.querySelectorAll(".menu-navegacao a")
    },

    init() {
        this.addScrollEffect();
        this.addIntersectionObserver();
        this.setupAnalytics();
        this.setupMobileMenu(); // Inicializa o menu mobile
    },

    // Controle do menu mobile
    setupMobileMenu() {
        if (!this.elements.btnHamburguer) return;

        // Abre e fecha ao clicar no hambúrguer
        this.elements.btnHamburguer.addEventListener("click", () => {
            this.elements.btnHamburguer.classList.toggle("active");
            this.elements.navMenu.classList.toggle("active");
        });

        // Fecha o menu automaticamente ao clicar em qualquer link (âncora)
        this.elements.navLinks.forEach(link => {
            link.addEventListener("click", () => {
                this.elements.btnHamburguer.classList.remove("active");
                this.elements.navMenu.classList.remove("active");
            });
        });
    },

    // ... (mantenha as outras funções addScrollEffect, addIntersectionObserver e setupAnalytics abaixo)
};
