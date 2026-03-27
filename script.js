let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classLlist.remove('active');
};


var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

 var swiper = new Swiper(".image", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    var swiper = new Swiper(".reviews slider", {
      loop : true,
      spaceBetween: 20,
      autoHeight:true,
      grabCursor:true,
  breakpoints: {
        640: {
          slidesPerView : 1,
        },
        768 : {
          slidesPerView : 2,
        },
        1024 : {
          slidesPerView : 3,
        },
      },

  } );
let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem=2;

loadMoreBtn.onclick = () =>{
  let boxes =[...document.querySelectorAll('.packages .box-container .box ')];
  for( var i = currentItem; i < currentItem + 2; i++){
    boxes[i].style.display ='inline-block';
  };
  currentItem +=2;
  if(currentItem >=boxes.length){
    loadMoreBtn.style.display ='none';
  }

}
// Initialize Swiper for Reviews Slider
var swiper = new Swiper('.reviews-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  loop: true,
  autoplay: {
      delay: 5000,
      disableOnInteraction: false
  }
});






form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})  



