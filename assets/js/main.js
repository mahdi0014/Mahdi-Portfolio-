console.log("MAIN JS LOADED ✅");


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Show menu */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== HOME TYPED JS ===============*/
const typedHome = new Typed('#home-typed', {
    strings: ['Web Developer', 'Freelancer', 'Designer'],
    typeSpeed: 90,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})

/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader  = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('shadow-header') 
                      : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== CONTACT EMAIL JS ===============*/ 
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_7ev8pwh','template_dh36kiu','#contact-form','2dzCazPmEWW8PVoFq')
  .then(() => {
    contactMessage.textContent = 'Message sent successfully.'

    setTimeout(() => {
      contactMessage.textContent =''
    }, 5000)

    contactForm.reset()
  }, () => {
   contactMessage.textContent = 'Message not Sent (Service error)'
  })
  
};

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUpBtn = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 350) {
    scrollUpBtn.classList.add('show-scroll');
  } else {
    scrollUpBtn.classList.remove('show-scroll');
  }
});



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  // reset: true, // Animations repeat
})

sr.reveal('.home__content, .resume__content:nth-Child(1), .footer__container')
sr.reveal('.home__data, .resume__content:nth-Child(2)', {delay: 300, origin: 'bottom'})

sr.reveal('.about__content, .contact__content', {origin: 'bottom'})
sr.reveal('.home__image, .contact__form', {delay: 300})

sr.reveal('.projects__card', {interval: 100})
