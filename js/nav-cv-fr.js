// CV link active on CV page

const navLinkCv = document.getElementById('cv-link');
const mobileNavLinkCv = document.getElementById('cv-link-mobile');

function linkStateCv() {
    navLinkCv.classList.add('active-link');
};

function mobileLinkStateCv() {
    mobileNavLinkCv.classList.add('active-link');
};

// call functions

linkStateCv();
mobileLinkStateCv();
