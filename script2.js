const sidebarContent = document.querySelectorAll('.sidebar-content');

function toggleOptions(contentId) {
  sidebarContent.forEach(content => {
    if (content.id === contentId) {
      content.classList.toggle('show');
    } else {
      content.classList.remove('show');
    }
  });
}

function showImage(imageName) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `<img src="Imagenes/${imageName}" alt="foto">`;
}

function showImage2(imageName) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = `<img src="Imagenes/ImagenCarta/${imageName}" alt="foto">`;
}

function toggleOptions() {
  const sidebarContent = document.getElementById('sidebar-content');
  const button = document.querySelector('.menu-btn');

  sidebarContent.classList.toggle('show');
  button.classList.toggle('active');
}

function toggleOptions2() {
  const sidebarContent = document.getElementById('sidebar-content2');
  const button = document.querySelectorAll('.menu-btn')[1];

  sidebarContent.classList.toggle('show');
  button.classList.toggle('active');
}

function toggleOptions3() {
  const sidebarContent = document.getElementById('sidebar-content3');
  const button = document.querySelectorAll('.menu-btn')[2];

  sidebarContent.classList.toggle('show');
  button.classList.toggle('active');
}