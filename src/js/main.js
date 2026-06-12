import { categories } from './data.js';
import { createCarousel } from './carrousel.js';

document.addEventListener('DOMContentLoaded', () => {
  const nomePerfil = localStorage.getItem('perfilAtivoNome');
  const imagemPerfil = localStorage.getItem('perfilAtivoImagem');
  if (!nomePerfil || !imagemPerfil) { window.location.href = '/index.html'; return; }
  const updateHeader = () => {
    const profileIcon = document.querySelector('.profile-icon');
    const kidsLink = document.querySelector('.kids-link');
    if (!profileIcon || !kidsLink) {
      return false;
    }
    kidsLink.textContent = nomePerfil;
    profileIcon.src = `../${imagemPerfil}`;
    profileIcon.onerror = () => {
      profileIcon.onerror = null;
      profileIcon.src = '../assets/images/4.png';
    };
    return true;
  };
  if (!updateHeader()) {
    const observer = new MutationObserver(() => {
      if (updateHeader()) { observer.disconnect(); } });
    observer.observe(document.body, { childList: true, subtree: true });
  }
  const container = document.getElementById('main-content');
  if (container) {
    categories.forEach((category) => { container.appendChild( createCarousel(category) ); });
  }
});