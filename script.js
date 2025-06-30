// script.js - Lógica para galería interactiva

document.addEventListener('DOMContentLoaded', () => {
  const inputUrl = document.getElementById('image-url');
  const addButton = document.getElementById('add-image');
  const deleteButton = document.getElementById('delete-image');
  const gallery = document.getElementById('gallery');

  let selectedImage = null;

  // Verifica que los elementos existen
  if (!inputUrl || !addButton || !deleteButton || !gallery) {
    console.error('Uno o más elementos no fueron encontrados en el DOM.');
    return;
  }

  // Agregar imagen desde URL
  addButton.addEventListener('click', () => {
    const url = inputUrl.value.trim();
    if (!url) {
      alert('Por favor, ingresa una URL válida.');
      return;
    }

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen agregada';
    img.classList.add('gallery-image');

    // Selección de imagen
    img.addEventListener('click', () => {
      if (selectedImage) {
        selectedImage.classList.remove('selected');
      }
      img.classList.add('selected');
      selectedImage = img;
    });

    gallery.appendChild(img);
    inputUrl.value = '';
  });

  // Eliminar imagen seleccionada
  deleteButton.addEventListener('click', () => {
    if (selectedImage) {
      gallery.removeChild(selectedImage);
      selectedImage = null;
    } else {
      alert('Selecciona una imagen para eliminar.');
    }
  });

  // Eliminar con tecla Delete
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Delete' && selectedImage) {
      gallery.removeChild(selectedImage);
      selectedImage = null;
    }
  });
});
