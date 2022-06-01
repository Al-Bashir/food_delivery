const menuIcon = document.querySelector('.nav-icon');
const navElements = document.querySelectorAll('.nav-elements')[0];
const navMenuList= document.querySelectorAll('.nav-menu-list');
menuIcon.addEventListener('click', () => {
    navElements.style.display = 'block';
    navElements.classList.add('nav-menu');
})
navElements.childNodes[1].addEventListener('click', () => {
    navElements.style.display = 'none';
    navElements.classList.remove('nav-menu');
})
navMenuList.forEach((child)=>{
    child.addEventListener('click', () => {
        navElements.style.display = 'none';
        navElements.classList.remove('nav-menu');
    })
})
