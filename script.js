// تم
const toggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
toggle.textContent = savedTheme === 'dark' ? 'روشن' : 'تیره';

toggle.onclick = () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  toggle.textContent = next === 'dark' ? 'روشن' : 'تیره';
};

// جستجوی زنده
document.getElementById('search').addEventListener('input', e => {
  const term = e.target.value.trim();
  document.querySelectorAll('.card').forEach(card => {
    const text = card.textContent;
    card.style.display = text.includes(term) ? '' : 'none';
  });
});