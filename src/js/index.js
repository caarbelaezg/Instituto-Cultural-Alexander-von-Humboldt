window.onload = () => {
  if (!sessionStorage.getItem("modal")) {
    window.setTimeout(modalfunc, 2000);
    sessionStorage.setItem("modal", "1");
  }
};

const modal = document.getElementById("modal");

const modalfunc = () => {
  /*Make modal appear*/
  if (modal.classList.contains("modal-close")) {
    modal.classList.remove("modal-close");
    modal.classList.add("modal-open");
  }

  const closeBtnModal = document.getElementById("modal-close-btn");
  closeBtnModal.addEventListener("click", closeModal);
};

const closeModal = () => {
  modal.setAttribute("style", "display:none");
};

//Slide principal
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
