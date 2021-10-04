// show project description

const moreInfoGroupomania = document.getElementById('more-info-groupomania');
const modalContentGroupomania = document.getElementById('modal-content-groupomania');

const moreInfoPiquante = document.getElementById('more-info-piquante');
const modalContentPiquante = document.getElementById('modal-content-piquante');

const moreInfoOricamera = document.getElementById('more-info-oricamera');
const modalContentOricamera = document.getElementById('modal-content-oricamera');

const moreInfoChouette = document.getElementById('more-info-chouette');
const modalContentChouette = document.getElementById('modal-content-chouette');

const moreInfoOhmyfood = document.getElementById('more-info-ohmyfood');
const modalContentOhmyfood = document.getElementById('modal-content-ohmyfood');

const moreInfoPortfolio = document.getElementById('more-info-portfolio');
const modalContentPortfolio = document.getElementById('modal-content-portfolio');


function showProject(moreInfo, modalContent) {
    moreInfo.addEventListener('click', function() {
        modalContent.classList.remove('modal');
    })
};

function hideProject(modalContent) {
    modalContent.addEventListener('click', function() {
        modalContent.classList.add('modal');
    })
};


// call functions

showProject(moreInfoGroupomania, modalContentGroupomania);
hideProject(modalContentGroupomania);

showProject(moreInfoPiquante, modalContentPiquante);
hideProject(modalContentPiquante);

showProject(moreInfoOricamera, modalContentOricamera);
hideProject(modalContentOricamera);

showProject(moreInfoChouette, modalContentChouette);
hideProject(modalContentChouette);

showProject(moreInfoOhmyfood, modalContentOhmyfood);
hideProject(modalContentOhmyfood);

showProject(moreInfoPortfolio, modalContentPortfolio);
hideProject(modalContentPortfolio);
