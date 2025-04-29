const text = "Vinicius Fernandes";
const typingText = document.getElementById("typing-text");
let index = 0;
let isDeleting = false;
let speed = 100; // Velocidade de digitar/apagar

function typeWriter() {
  if (isDeleting) {
    typingText.innerHTML = text.substring(0, index--);
  } else {
    typingText.innerHTML = text.substring(0, index++);
  }

  if (!isDeleting && index === text.length) {
    setTimeout(() => isDeleting = true, 1000); // Espera 1s para começar apagar
  } else if (isDeleting && index === 0) {
    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
      document.getElementById('content').style.display = 'block';
    }, 500); 
    return;
  }

  setTimeout(typeWriter, isDeleting ? speed / 2 : speed);
}

window.onload = () => {
  typeWriter();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
  });
}
