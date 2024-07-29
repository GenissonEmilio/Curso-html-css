document.addEventListener('DOMContentLoaded', () => {
  let menu = document.getElementById('men');
  let burguer = document.getElementById('burguer');
  
  burguer.addEventListener('click', () => {
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
  
  document.addEventListener('resize', () => {
    if (window.innerWidth >= 481) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none'
    }
  });
  
})