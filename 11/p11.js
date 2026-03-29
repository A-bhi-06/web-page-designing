
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
   
    body.classList.toggle('darkmode');
});


const scrollTopBtn = document.getElementById('scroll-top');

window.onscroll = function() {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.addEventListener('click', () => {
   
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});