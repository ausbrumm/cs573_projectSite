const gallery = document.getElementsByClassName("gallery");
const images = gallery[0].getElementsByTagName("img");
const galleryPrev = document.getElementById("gallery-prev");
const galleryNext = document.getElementById("gallery-next");
const mobileNav = document.getElementById("mobile-nav");
const mobileBar = document.getElementById("mobile-bar");

let currPhoto = 0;
for(let i of images){
  if(i.classList.contains("visible")){
    break;
  }
  currPhoto++;
}

galleryPrev.addEventListener("click", ()=>{
 images[currPhoto].classList.toggle("visible");
 images[currPhoto].classList.toggle("hidden");
 currPhoto = (currPhoto  - 1 + images.length) % images.length;

 images[currPhoto].classList.toggle("visible");
 images[currPhoto].classList.toggle("hidden");
});

galleryNext.addEventListener("click", ()=>{

 images[currPhoto].classList.toggle("visible");
 images[currPhoto].classList.toggle("hidden");
 currPhoto = (currPhoto + 1) % images.length;

 images[currPhoto].classList.toggle("visible");
 images[currPhoto].classList.toggle("hidden");

});

mobileNav.addEventListener("click", ()=>{
  mobileBar.classList.toggle("active");
  const menuIcon = mobileNav.getElementsByTagName("i");
  menuIcon[0].classList.toggle("bi-list");
  menuIcon[0].classList.toggle("bi-x-lg");
});
