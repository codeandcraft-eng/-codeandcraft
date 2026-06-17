// Garante que o código só roda depois que TODO o HTML foi carregado
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mapeia os elementos do menu
    const btnHamburguer = document.querySelector(".menu-hamburguer");
    const navMenu = document.querySelector(".menu-navegacao");
    const navLinks = document.querySelectorAll(".menu-navegacao a");

    // 2. Verifica se os elementos realmente existem na página
    if (btnHamburguer && navMenu) {
        
        // Evento de clique para abrir/fechar o menu
        btnHamburguer.addEventListener("click", () => {
            btnHamburguer.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Fecha o menu automaticamente ao clicar em qualquer link
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                btnHamburguer.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

    } else {
        // Se der erro, isso vai aparecer no Console do seu navegador (F12)
        console.error("Erro: .menu-hamburguer ou .menu-navegacao não foram encontrados no HTML.");
    }
});

