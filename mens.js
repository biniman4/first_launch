// Array of image URLs
const imageUrls = [
    
    './mens-Img/cloth18.jpg',
    './mens-Img/cloth14.jpg',
    './mens-Img/cloth15.jpg',
    './mens-Img/cloth13.jpg',
    './mens-Img/cloth24.jpg',
    './mens-Img/cloth7.jpg',
    './mens-Img/cloth8.jpg',
    './mens-Img/cloth21.jpg',
    './mens-Img/cloth30.jpg',
    './mens-Img/cloth31.jpg',
   './mens-Img/cloth32.jpg',
    './mens-Img/cloth25.jpg',
    './mens-Img/cloth9.jpg',
    './mens-Img/cloth10.jpg',
    './mens-Img/cloth11.jpg',
    './mens-Img/cloth12.jpg',
    './mens-Img/cloth26.jpg',
    './mens-Img/cloth6.jpg',
    './mens-Img/cloth4.jpg',
    './mens-Img/cloth27.jpg',
    './mens-Img/cloth5.jpg',
    './mens-Img/cloth16.jpg',
    './mens-Img/cloth17.jpg',
    './mens-Img/cloth28.jpg',
    './mens-Img/cloth3.jpg',
    './mens-Img/cloth19.jpg',
    './mens-Img/cloth29.jpg',
    './mens-Img/cloth2.jpg'
    ,'./mens-Img/cloth14.jpg',
    './mens-Img/cloth22.jpg',
    './mens-Img/cloth1.jpg',
    './mens-Img/cloth23.jpg',
    './mens-Img/cloth21.jpg',
   './mens-Img/cloth20.jpg',
];

// Loop through elements and set background images
for (let i = 0; i < imageUrls.length; i++) {
    let clothId = `cloth${i + 1}`;
    let clothElement = document.getElementById(clothId);
    if (clothElement) {
        clothElement.style.backgroundImage = `url('${imageUrls[i]}')`;
    }
}

function toggleMenu() {
    var navLinks = document.querySelector('.nav-bar ul');
    navLinks.classList.toggle('show');
}
