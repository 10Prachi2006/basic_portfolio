//SCROLL SECTIONS
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
//sticky Navabr
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};



//scroll reveal
ScrollReveal({
    reset: true,
    distance:'80px',
    delay:100,
    duration:2000
});
ScrollReveal().reveal('.home-content, .heading', {origin:"top"});
ScrollReveal().reveal('.services-container, .portfolio-container', {origin:"bottom"});
ScrollReveal().reveal('.home-content h1,.about-content', {origin:"left"});
ScrollReveal().reveal('.home-content h3', {origin:"right"});




//typed JS
const typed = new Typed(".multiple-text",{
    strings: ["Frontend-Developer","Back-end Developer","Full-Stack Developer","Designer"],
    typeSpeed : 50,
    backSpeed: 50,
    backDelay:50,
    fadeOut: true,
    showCursor: true,
    smartBackspace: true, // Default value
    loop: true,
})
