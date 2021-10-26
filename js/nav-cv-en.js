// resume link active on resume page

const navLinkCvEn = document.getElementById('cv-en-link');
const mobileNavLinkCvEn = document.getElementById('cv-en-link-mobile');

function linkStateCvEn() {
    navLinkCvEn.classList.add('active-link');
};

function mobileLinkStateCvEn() {
    mobileNavLinkCvEn.classList.add('active-link');
};

// call functions

linkStateCvEn();
mobileLinkStateCvEn();
