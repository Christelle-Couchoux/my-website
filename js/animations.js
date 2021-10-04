// About and Contact sections animation

const hiddenSections = document.querySelectorAll('.hidden-section');

function initSections() {
    for (let i = 0; i < hiddenSections.length; i++) {
        const hiddenSection = hiddenSections[i];
        hiddenSection.classList.add('hidden-js');
    };
};

function checkPositionSections() {
    for (let i = 0; i < hiddenSections.length; i++) {
        const hiddenSection = hiddenSections[i];
        const positionFromTop = hiddenSections[i].getBoundingClientRect().top;

        if (positionFromTop <= 300) {
            hiddenSection.classList.add('fade-in-section');
            hiddenSection.classList.remove('hidden-js');
        };
    };
};

initSections();
window.addEventListener('scroll', checkPositionSections);



// Projects section animation

// title

const hiddenTitles = document.querySelectorAll('.hidden-title');

function initTitles() {
    for (let i = 0; i < hiddenTitles.length; i++) {
        const hiddenTitle = hiddenTitles[i];
        hiddenTitle.classList.add('hidden-js');
    };
};

function checkPositionTitles() {
    for (let i = 0; i < hiddenTitles.length; i++) {
        const hiddenTitle = hiddenTitles[i];
        const positionFromTop = hiddenTitles[i].getBoundingClientRect().top;

        if (positionFromTop <= 300) {
            hiddenTitle.classList.add('fade-in-title');
            hiddenTitle.classList.remove('hidden-js');
        };
    };
};

initTitles();
window.addEventListener('scroll', checkPositionTitles);


// project

const hiddenProjects = document.querySelectorAll('.hidden-project');

function initProjects() {
    for (let i = 0; i < hiddenProjects.length; i++) {
        const hiddenProject = hiddenProjects[i];
        hiddenProject.classList.add('hidden-js');
    };
};

function checkPositionProjects() {
    for (let i = 0; i < hiddenProjects.length; i++) {
        const hiddenProject = hiddenProjects[i];
        const positionFromTop = hiddenProjects[i].getBoundingClientRect().top;

        if (positionFromTop <= 500) {
            hiddenProject.classList.add('fade-in-project');
            hiddenProject.classList.remove('hidden-js');
        };
    };
};

initProjects();
window.addEventListener('scroll', checkPositionProjects);
