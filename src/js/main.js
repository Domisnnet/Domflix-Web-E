import { categories } from './data.js';
import { createCarousel } from './carrousel.js';

document.addEventListener('DOMContentLoaded', () => {
  const nomePerfil = localStorage.getItem('perfilAtivoNome');
  const imagemPerfil = localStorage.getItem('perfilAtivoImagem'); 
  if (!nomePerfil || !imagemPerfil) { 
    window.location.href = '../../index.html'; return; 
  }
  const headerObserver = new MutationObserver((mutations, observer) => {
    const profileIcon = document.querySelector('.profile-icon');
    const kidsLink = document.querySelector('.kids-link');
    if (profileIcon && kidsLink) { kidsLink.textContent = nomePerfil; profileIcon.src = 
      `../${imagemPerfil}`; observer.disconnect(); 
    }
  });
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) { 
    headerObserver.observe(headerContainer, { childList: true, subtree: true });
  }
  const container = document.getElementById('main-content');
  if (container) {
    categories.forEach((category) => { const carousel = createCarousel(category); 
      container.appendChild(carousel); });
  }
});