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
  


document.addEventListener("DOMContentLoaded", () => {
    const clienteTrack = document.querySelector(".clienteTrack");
    const clienteSlides = document.querySelectorAll(".clienteSlide");
    const prevButton = document.querySelector(".clienteButton.prev");
    const nextButton = document.querySelector(".clienteButton.next");

    // Clonar os primeiros 3 slides para o final para efeito infinito
    const cloneCount = 3;
    for (let i = 0; i < cloneCount; i++) {
        let clone = clienteSlides[i].cloneNode(true);
        clienteTrack.appendChild(clone);
    }

    let currentIndex = 0;
    const totalSlides = clienteSlides.length; // 7 slides originais
    const slidesToShow = 3;

    function updateCarousel() {
        const offset = -currentIndex * (100 / slidesToShow);
        clienteTrack.style.transform = `translateX(${offset}%)`;
    }

    function handleNext() {
        if (currentIndex >= totalSlides) {
            // Reset suave para os slides originais
            clienteTrack.style.transition = 'none';
            currentIndex = 0;
            updateCarousel();
            setTimeout(() => {
                clienteTrack.style.transition = 'transform 0.5s ease-in-out';
                currentIndex++;
                updateCarousel();
            }, 10);
        } else {
            currentIndex++;
            updateCarousel();
        }
    }

    function handlePrev() {
        if (currentIndex <= 0) {
            // Reset suave para os clones finais
            clienteTrack.style.transition = 'none';
            currentIndex = totalSlides;
            updateCarousel();
            setTimeout(() => {
                clienteTrack.style.transition = 'transform 0.5s ease-in-out';
                currentIndex--;
                updateCarousel();
            }, 10);
        } else {
            currentIndex--;
            updateCarousel();
        }
    }

    nextButton.addEventListener('click', handleNext);
    prevButton.addEventListener('click', handlePrev);

    // Autoplay opcional (descomente se quiser)
    // setInterval(handleNext, 3000);
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
