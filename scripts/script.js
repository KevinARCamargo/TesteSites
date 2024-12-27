// Exemplo de rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".carousel-image");
  const prevButton = document.querySelector(".carousel-control.prev");
  const nextButton = document.querySelector(".carousel-control.next");
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
  const startCarousel = () => {
    interval = setInterval(showNextImage, 10000); // 10 segundos
  };

  startCarousel();
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


// Função para impedir o envio padrão e exibir o alerta de agradecimento
function enviarMensagem(event) {
  event.preventDefault(); // Impede o envio do formulário e o recarregamento da página

  // Exibe o custom alert com a mensagem de agradecimento
  document.getElementById('custom-alert').style.display = 'block';

  // Envia o formulário (agora ele será enviado para o email sem recarregar a página)
  setTimeout(() => {
      document.getElementById('contact-form').submit();  // Envia o formulário após mostrar o alert
  }, 5000);  // Espera 1 segundo antes de enviar o formulário, após o alert
}

// Função para fechar o alert
function fecharAlert() {
  document.getElementById('custom-alert').style.display = 'none';
}
