document.addEventListener('DOMContentLoaded', () => {
  const burguer = document.querySelector('#burguer');
  const menu = document.querySelector('#menu');
  
  burguer.addEventListener('click', bur => {
    if (menu.style.display == 'block') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
  });
})