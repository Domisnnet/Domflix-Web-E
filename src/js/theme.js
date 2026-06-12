function toggleTheme() {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem( 'theme', isDark ? 'dark' : 'light' );
  if (btn) { btn.textContent = isDark ? '☀️' : '🌙'; }
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (btn) {
      btn.textContent = '☀️';
    }
  } else {
    body.classList.remove('dark-mode');
    if (btn) { btn.textContent = '🌙'; }
  }
  if (btn) { btn.addEventListener('click', toggleTheme); }
});