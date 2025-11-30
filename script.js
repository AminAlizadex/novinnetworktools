// تم تیره/روشن
const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
toggle.textContent = currentTheme === 'dark' ? 'روشن' : 'تیره';

toggle.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggle.textContent = theme === 'dark' ? 'روشن' : 'تیره';
});

// سرچ زنده
document.getElementById('search').addEventListener('input', (e) => {
  const term = e.target.value.trim();
  document.querySelectorAll('.tool-card').forEach(card => {
    const text = card.textContent;
    card.style.display = text.includes(term) ? 'block' : 'none';
  });
});