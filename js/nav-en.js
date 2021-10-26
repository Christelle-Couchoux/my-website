// Go to resume page

const cvEnLinkMobile = document.getElementById('cv-en-link-mobile');

function goToCvMobile() {
    cvEnLinkMobile.addEventListener('click', function() {
        window.location.href = './resume.php';
        links.style.display = 'none';
        burger.classList.remove('active-burger');
    })
};

const cvEnLink = document.getElementById('cv-en-link');

function goToCv() {
    cvEnLink.addEventListener('click', function() {
        window.location.href = './resume.php';
    })
};



// Call functions

goToCvMobile();
goToCv();
