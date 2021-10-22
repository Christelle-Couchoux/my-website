////////////////////////////////////////////////////
// Toggle mobile nav links

const burger = document.getElementById('burger');

function showNavLinks(burger) {
    burger.addEventListener('click', function() {
        const links = document.getElementById('links');
        if (links.style.display === 'flex') {
            links.style.display = 'none';
            burger.classList.remove('active-burger');
        } else {
            links.style.display = 'flex';
            burger.classList.add('active-burger');
        };
    })
};


// call function

showNavLinks(burger);



////////////////////////////////////////////////////
// go to section (mobile)

const home = document.getElementById('home');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const homeLinkMobile = document.getElementById('home-link-mobile');
const aboutLinkMobile = document.getElementById('about-link-mobile');
const projectsLinkMobile = document.getElementById('projects-link-mobile');
const contactLinkMobile = document.getElementById('contact-link-mobile');
const goToProjectsLinkMobile = document.getElementById('view-projects-link');

function scrollToHomeMobile() {
    homeLinkMobile.addEventListener('click', function() {
        home.scrollIntoView({
            behavior: 'smooth'
        });
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};

function scrollToAboutMobile() {
    aboutLinkMobile.addEventListener('click', function() {
        about.scrollIntoView({
            behavior: 'smooth'
        });
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};

function scrollToProjectsMobile() {
    projectsLinkMobile.addEventListener('click', function() {
        projects.scrollIntoView({
            behavior: 'smooth'
        });
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};

function scrollToContactMobile() {
    contactLinkMobile.addEventListener('click', function() {
        contact.scrollIntoView({
            behavior: 'smooth'
        });
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};


// go to section (desktop)

const homeLink = document.getElementById('home-link');
const aboutLink = document.getElementById('about-link');
const projectsLink = document.getElementById('projects-link');
const contactLink = document.getElementById('contact-link');
const goToProjectsLink = document.getElementById('view-projects-link');


function scrollToHome() {
    homeLink.addEventListener('click', function() {
        home.scrollIntoView({
            behavior: 'smooth'
        });
    })
};

function scrollToAbout() {
    aboutLink.addEventListener('click', function() {
        about.scrollIntoView({
            behavior: 'smooth'
        });
    })
};

function scrollToProjects() {
    projectsLink.addEventListener('click', function() {
        projects.scrollIntoView({
            behavior: 'smooth'
        });
    })
};

function scrollToContact() {
    contactLink.addEventListener('click', function() {
        contact.scrollIntoView({
            behavior: 'smooth'
        });
    })
};

function scrollToProjectsView() {
    goToProjectsLink.addEventListener('click', function() {
        projects.scrollIntoView({
            behavior: 'smooth'
        });
    })
};


// call functions

scrollToHome();
scrollToAbout();
scrollToProjects();
scrollToContact();
scrollToProjectsView();

scrollToHomeMobile();
scrollToAboutMobile();
scrollToProjectsMobile();
scrollToContactMobile();



////////////////////////////////////////////////////
// change mobile nav link state

const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const mobileSections = document.querySelectorAll('section');

function changeMobileLinkState() {
    let index = mobileSections.length;
    while(--index && window.scrollY + 200 < mobileSections[index].offsetTop) {}
    mobileNavLinks.forEach((mobileNavLink) => mobileNavLink.classList.remove('active-link'));
    mobileNavLinks[index].classList.add('active-link');
};


// change desktop nav link state

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
    let index = sections.length;
    while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
    navLinks.forEach((navLink) => navLink.classList.remove('active-link'));
    navLinks[index].classList.add('active-link');
};


// call functions

window.addEventListener('scroll', changeMobileLinkState);
window.addEventListener('scroll', changeLinkState);
