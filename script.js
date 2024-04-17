const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length ; i++) {
        imgs[i].style .display ='none';

    }
    imgs[n].style.display ='block';
}
changeSlide();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})


next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show the "Back to Top" button when user scrolls to the start of the footer
window.addEventListener('scroll', function() {
    var button = document.querySelector('.back-to-top');
    var footer = document.querySelector('footer');
    var footerOffsetTop = footer.offsetTop;

    if (window.scrollY >= footerOffsetTop) {
        button.style.bottom = '20px'; // Show the button
    } else {
        button.style.bottom = '-50px'; // Hide the button
    }
});
