const toggleNavbar = document.getElementById('toggle-navbar');

function onToggleNavbar(e) {
    if (e.type === 'touchstart') { 
        e.preventDefault(); 
    }

    const navbar = document.getElementById('navbar');
    if (navbar != null) {
        navbar.classList.toggle('active');
    }

    const isActive = navbar.classList.contains('active');
    e.currentTarget.setAttribute('aria-expanded', isActive);

    isActive ? 
        e.currentTarget.setAttribute('aria-label', 'Fechar menu') :
        e.currentTarget.setAttribute('aria-label', 'Abrir menu');
}

if (toggleNavbar != null) {
    toggleNavbar.addEventListener('click', onToggleNavbar);
    toggleNavbar.addEventListener('touchstart', onToggleNavbar);
}