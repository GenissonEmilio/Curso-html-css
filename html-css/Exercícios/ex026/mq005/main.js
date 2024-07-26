document.addEventListener('DOMContentLoaded', () => {
  let menu = document.getElementById('men');
  let burguer = document.getElementById('burguer');
  
  burguer.addEventListener('click', () => {
    if (menu.style.display == 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  })
  
})