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