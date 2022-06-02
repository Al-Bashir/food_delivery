const menuIcon = document.querySelector('.nav-icon');
const navElements = document.querySelectorAll('.nav-elements')[0];
const navMenuList= document.querySelectorAll('.nav-menu-list');
const mql = window.matchMedia('(max-width: 767px)');
// mql.addEventListener("change", () => {
//     console.log(document.querySelectorAll('.nav-elements')[0])
//     navElements.style.display = 'block';
// })
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
        if (window.matchMedia("(max-width: 767px)").matches){
            console.log(window.matchMedia("(min-width: 767px)"))
            navElements.style.display = 'none';
            navElements.classList.remove('nav-menu');
        }
    })
})
