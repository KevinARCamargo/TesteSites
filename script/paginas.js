// Array de imagens para a galeria
const images = [
    "../imagens/estrutura1.jpg",
    "../imagens/estrutura2.jpg",
    "imagens/produto-thumb2.jpg",
    "imagens/produto-thumb3.jpg"
];

// Variáveis globais
let currentIndex = 0;

// Função para abrir o lightbox
function openLightbox(src) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImage');
    
    lightbox.style.display = "block";
    lightboxImg.src = src;
    currentIndex = images.indexOf(src);
}

// Função para fechar o lightbox
function closeLightbox() {
    document.getElementById('imageLightbox').style.display = "none";
}

// Função para navegar entre as imagens
function navigate(direction) {
    currentIndex += direction;
    
    // Verifica os limites do array
    if (currentIndex >= images.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    
    // Atualiza a imagem no lightbox
    document.getElementById('lightboxImage').src = images[currentIndex];
}

// Função para trocar a imagem principal ao clicar nas thumbnails
function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = src;
    
    // Atualiza a classe 'active' nas thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
    
    // Atualiza o índice atual
    currentIndex = images.indexOf(src);
}

// Fechar o lightbox ao clicar fora da imagem
window.onclick = function(event) {
    const lightbox = document.getElementById('imageLightbox');
    if (event.target == lightbox) {
        closeLightbox();
    }
}

// Eventos de teclado para navegação no lightbox
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('imageLightbox');
    
    if (lightbox.style.display === "block") {
        if (event.key === "ArrowLeft") {
            navigate(-1);
        } else if (event.key === "ArrowRight") {
            navigate(1);
        } else if (event.key === "Escape") {
            closeLightbox();
        }
    }
});

// Inicialização da galeria
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            changeImage(images[index]);
        });
    });
    
    // Adiciona evento de clique na imagem principal para abrir o lightbox
    document.getElementById('mainImage').addEventListener('click', function() {
        openLightbox(this.src);
    });
});