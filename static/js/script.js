const fadeIns = document.querySelectorAll('.fade-in');

// Para cada elemento, adiciona uma classe 'active' após um pequeno atraso
fadeIns.forEach((element, index) => {
  setTimeout(() => {
    element.classList.add('active');
  }, index * 200); // Atraso de 200ms para cada elemento
});