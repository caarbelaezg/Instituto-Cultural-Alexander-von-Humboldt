const wpp = document.getElementById('wpp')
wpp.setAttribute('href', 'https://api.whatsapp.com/send?phone=573008763792&text=Cuéntanos que información quieres saber sobre el AVH')

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 8000;
let currentImageCounter = 0; // setting a variable to keep track of the current image (slide)

//slideshowImages[currentImageCounter].style.display = "block";
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
    // slideshowImages[currentImageCounter].style.display = "none";
    slideshowImages[currentImageCounter].style.opacity = 0;

    currentImageCounter = (currentImageCounter + 1) % slideshowImages.length;

    // slideshowImages[currentImageCounter].style.display = "block";
    slideshowImages[currentImageCounter].style.opacity = 1;
}