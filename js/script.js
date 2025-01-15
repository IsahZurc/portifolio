let btnMenu = document.getElementById('btn-menu');
let btnFechar = document.getElementById('btn-fechar');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

// Abre o menu
btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu');
    overlay.classList.add('ativo');
});

// Fecha o menu ao clicar no botão fechar
btnFechar.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu');
    overlay.classList.remove('ativo');
});

// Seleciona todos os links da navegação principal e do menu mobile
const navLinks = document.querySelectorAll('.navbar a, .menu-mobile nav a');

// Adiciona o evento de clique a cada link
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // Remove a classe 'active' de todos os links
        navLinks.forEach(link => link.classList.remove('active'));

        // Adiciona a classe 'active' ao link clicado
        this.classList.add('active');
    });
});

// Fecha o menu mobile ao clicar em qualquer link
const mobileLinks = document.querySelectorAll('.menu-mobile nav a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
        overlay.classList.remove('ativo');
    });
});
