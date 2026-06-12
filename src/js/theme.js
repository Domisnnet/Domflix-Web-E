document.addEventListener('templatesLoaded', () => {
  const body = document.body;
  const btn = document.getElementById('theme-toggle');

  if (!btn) {
    console.error('Botão theme-toggle não encontrado');
    return;
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    btn.textContent = '☀️';
  } else {
    body.classList.remove('dark-mode');
    btn.textContent = '🌙';
  }

  btn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem( 'theme', isDark ? 'dark' : 'light' );
    btn.textContent = isDark ? '☀️' : '🌙';
  });
});