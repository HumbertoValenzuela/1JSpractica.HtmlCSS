const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {

   const menuMostrar = document.querySelector('.nav-menu'); 
    //  toggle dice: la clase no existe, sino existe la crea
   menuMostrar.classList.toggle('show');
});

//  <script src="https://unpkg.com/scrollreveal"></script>
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-card',  {delay: 500});
ScrollReveal().reveal('.cards-banner-one',  {delay: 500});
ScrollReveal().reveal('.news-card',  {delay: 500});
ScrollReveal().reveal('.cards-banner-two',  {delay: 500});

