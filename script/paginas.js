function changeImage(imageSrc, clickedThumb) {
    // Atualiza a imagem principal
    document.getElementById('mainImage').src = imageSrc;
    
    // Remove a classe active de todas as thumbnails
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
    });
    
    // Adiciona a classe active na thumbnail clicada
    clickedThumb.classList.add('active');
}