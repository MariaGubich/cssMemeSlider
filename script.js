const images = document.querySelectorAll(".images > img");
const dots = document.querySelectorAll(".nav-btns > div"); 


images.forEach((image, index) => {
  if (index !== 0) {
    image.style.display = "none";
  }
});


dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    
    images.forEach((image) => (image.style.display = "none"));
    dots.forEach((dot) => dot.classList.remove("active"));

    
    images[index].style.display = "block"; 
    dot.classList.add("active");
  });
});