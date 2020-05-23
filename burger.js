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
        let string = "";
        data.forEach(menu => {
            string += `<h4> ${menu.title} </h4>
            <img src="${menu.image}" class="menuImage"></img>
            `;
        });
        menuList.innerHTML = string;
    });



const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

const filtered = items.some(num => {
    return num.price > 200;
});

// const filtered = items.filter(num => {
//     return num.price > 200;
// });

// console.log(filtered);