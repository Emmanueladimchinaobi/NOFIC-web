const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


btn.addEventListener("click", () => {
  menu.classList.toggle("-translate-x-full");
  menu.classList.toggle("-translate-x-0");
  menu.classList.toggle("opacity-0");

});


const servicesBtn = document.getElementById("services-btn");
const servicesMenu = document.getElementById("services-menu");

servicesBtn.addEventListener("click", () => {
  servicesMenu.classList.toggle("hidden");
});
const servicesBtn2 = document.getElementById("services-btn2");
const servicesMenu2 = document.getElementById("services-menu2");

servicesBtn2.addEventListener("click", () => {
  servicesMenu2.classList.toggle("hidden");
});
const servicesBtn3 = document.getElementById("services-btn3");
const servicesMenu3 = document.getElementById("services-menu3");

servicesBtn3.addEventListener("click", () => {
  servicesMenu3.classList.toggle("hidden");
});

const images = [
      "img/download (12).jfif",
      "img/Hospital Wayfinding Display.jfif",
      "img/Blurred Emergency Room Background – Abstract Hospital Interior.jfif",
      "img/download (13).jfif"
    ];

    let currentIndex = 0;

    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("photo").src = images[currentIndex];
    }, 3000);

    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      document.getElementById("photo").src = images[currentIndex];
    };
    const text = document.getElementById("mytext");
    text.addEventListener("mouseenter", () => {
      text.textContent = "Schedule a visit";
    });
    text.addEventListener("mouseleave" , () => {
      text.textContent ="who we are";
     
    });
 

    

   
