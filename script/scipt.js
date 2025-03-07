document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".about-carousel-image");
    const prevButton = document.querySelector(".about-carousel-control.prev");
    const nextButton = document.querySelector(".about-carousel-control.next");
    let currentIndex = 0;
    let interval;
  
    // Função para alternar para a próxima imagem
    const showNextImage = () => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
    };
  
    // Função para alternar para a imagem anterior
    const showPrevImage = () => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      images[currentIndex].classList.add("active");
    };
  
    // Adicionar evento aos botões
    nextButton.addEventListener("click", () => {
      clearInterval(interval); // Parar rotação automática ao clicar
      showNextImage();
    });
  
    prevButton.addEventListener("click", () => {
      clearInterval(interval); // Parar rotação automática ao clicar
      showPrevImage();
    });
  
    // Configurar rotação automática
    const startCarousel2 = () => {
      interval = setInterval(showNextImage, 10000); // 10 segundos
    };
  
    startCarousel2();
  });
  


// Seleciona os elementos
const slidesContainer = document.querySelector('.clientes-carousel-slides');
const slides = document.querySelectorAll('.clientes-carousel-slide');
const prevButton = document.querySelector('.clientes-carousel-prev');
const nextButton = document.querySelector('.clientes-carousel-next');
let currentIndex = 0;
const totalSlides = slides.length;

function updateCarousel() {
    const slideWidth = 33.33333; // Percentual correspondente a cada slide
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
}

// Evento para botão "anterior"
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

// Evento para botão "próximo"
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    function updateHeaderColor() {
        let isBlueBackground = true;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const inView = rect.top <= 100 && rect.bottom >= 100; // Verifica se está na área visível

            if (inView) {
                // Verifica se a seção tem fundo azul
                const bgColor = window.getComputedStyle(section).backgroundColor;
                if (bgColor === "rgb(33, 77, 146)") { // Azul (#214D92 em RGB)
                    isBlueBackground = false;
                }
            }
        });

        if (isBlueBackground) {
            header.classList.remove("header-white");
            header.classList.add("header-blue");
        } else {
            header.classList.remove("header-blue");
            header.classList.add("header-white");
        }
    }

    window.addEventListener("scroll", updateHeaderColor);
    updateHeaderColor(); // Chama ao carregar a página
});

