const navOpen = () => {
    const burger = document.querySelector('.nav2');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}

navOpen();

const menuList = document.querySelector(".menu");

fetch('burger.json')
    .then(res => res.json())
    .then(data => {
        data.forEach(menu => {
            console.log(menu.title);
            console.log(menu.id);
        });
    })