const navOpen = () => {
    const burger = document.querySelector('.nav2');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
}

navOpen();