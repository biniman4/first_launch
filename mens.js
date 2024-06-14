// Array of image URLs
const imageUrls = [
    './mens-Img/cloth1.jpg',
    './mens-Img/cloth2.jpg',
    './mens-Img/cloth3.jpg',
    './mens-Img/cloth4.jpg',
    './mens-Img/cloth5.jpg',
    './mens-Img/cloth6.jpg',
    './mens-Img/cloth7.jpg',
    './mens-Img/cloth8.jpg',
    './mens-Img/cloth9.jpg',
    './mens-Img/cloth10.jpg',
    './mens-Img/cloth11.jpg',
    './mens-Img/cloth12.jpg'
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
