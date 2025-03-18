function changeImage(newImagePath, clickedElement) {
    // Atualiza a imagem principal
    const mainImage = document.getElementById('mainImage');
    mainImage.src = newImagePath;
    
    // Remove a classe 'active' de todas as thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
      thumb.classList.remove('active');
    });
    
    // Adiciona a classe 'active' apenas na thumbnail clicada
    clickedElement.classList.add('active');
  }

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a');

// Abrir/Fechar o menu ao clicar no ícone
menuToggle.addEventListener('click', (event) => {
    navLinks.classList.toggle('show');
    event.stopPropagation(); // Previne que o clique no botão feche o menu
});

// Fechar o menu ao clicar em qualquer link
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Fechar o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    const isClickInsideMenu = navLinks.contains(event.target) || menuToggle.contains(event.target);
    if (!isClickInsideMenu) {
        navLinks.classList.remove('show');
    }
});