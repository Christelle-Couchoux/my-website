// Go to CV page

const cvLinkMobile = document.getElementById('cv-link-mobile');

function goToCvMobile() {
    cvLinkMobile.addEventListener('click', function() {
        window.location.href = './cv.php';
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};

const cvLink = document.getElementById('cv-link');

function goToCv() {
    cvLink.addEventListener('click', function() {
        window.location.href = './cv.php';
    })
};



// Call functions

goToCvMobile();
goToCv();
