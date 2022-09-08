const showNavButton = document.getElementById('show-menu-button');
const nav = document.querySelector('nav')

showNavButton.addEventListener('click', () => {
    if(nav.classList.contains('visible')) { 
        nav.classList.remove('visible');
        showNavButton.innerHTML = '<img src="images/icon-hamburger.svg" alt="">'
    }else { 
        nav.classList.add('visible')   
        showNavButton.innerHTML = '<img src="images/icon-close.svg" alt="">'
    }
}) 