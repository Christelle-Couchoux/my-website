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
