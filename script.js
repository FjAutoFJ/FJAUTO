// FJ Auto — Interacciones básicas
(function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

function sendEmail(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const msg = document.getElementById('msg').value.trim();
  const subject = encodeURIComponent('Contacto desde la web — FJ Auto');
  const body = encodeURIComponent(`Hola FJ Auto,` +
    `Mi nombre es ${name} ${msg}` +
    `Envíado desde fjauto.pr web.`);
  window.location.href = `mailto:fjautofj@gmail.com?subject=${subject}&body=${body}`;
  return false;
}
