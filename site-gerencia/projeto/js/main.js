const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('aberto')));

const habilidades = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'React', 'Git e GitHub', 'SQL', 'MongoDB', 'PWA', 'Segurança da Informação'];
document.getElementById('skills').innerHTML = habilidades.map(h => `<span>${h}</span>`).join('');

document.getElementById('ano').textContent = new Date().getFullYear();

const links = [...menu.querySelectorAll('a')];
const obs = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) links.forEach(l => l.classList.toggle('ativo', l.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('section[id]').forEach(s => obs.observe(s));
