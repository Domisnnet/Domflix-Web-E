import { createCard } from './card.js';

export function createCarousel(category) {
  const carouselSection = document.createElement('div');
  carouselSection.className = 'carousel';
  const title = document.createElement('h2');
  title.className = 'carousel-title';
  title.innerText = category.title;
  carouselSection.appendChild(title);
  const itemsContainer = document.createElement('div');
  itemsContainer.className = 'carousel-items';
  category.items.forEach((item) => { const card = createCard(item); itemsContainer.appendChild(card); });
  carouselSection.appendChild(itemsContainer); return carouselSection;
}