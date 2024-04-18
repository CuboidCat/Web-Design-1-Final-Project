let currentlyTransitioning = false;
let totalHeight = 0;
window.onload = onload();
function onload() {
    const dropdownList = document.querySelector('.languageDropdownListD');
    const dropdownListContent = document.querySelectorAll('.DDropdownContent');
    const menu = document.querySelector('.menu-toggle');
    const dropdown = document.querySelector('.dropdown-content');
    const nav = document.getElementById('nav');
    const tempMenu = menu.style.display;
    const tempDropdown = dropdown.style.display;


    nav
    menu.style.display = 'block';
    dropdown.style.display = 'block';
    dropdownList.style.height = 'auto';
    dropdownListContent.forEach(function(item, index) {
        totalHeight += item.clientHeight;
    });
    dropdownList.style.height = '0px';
    menu.style.display = tempMenu;
    dropdown.style.display = tempDropdown;
}


document.querySelector('.languageDropdownButtonD').addEventListener('click', function() {
    if (currentlyTransitioning) {
        return;
    }
    var dropdownList = document.querySelector('.languageDropdownListD');
    var languageIndicator = document.getElementById('languageArrowD');
    var dropdownListContent = document.querySelectorAll('.DDropdownContent');
    dropdownList.style.transition = 'height 0.7s ease-in-out';
    languageIndicator.style.transition = 'transform 0.7s ease-in-out';
    if (dropdownList.style.height === '0px' || dropdownList.style.height === '') {
        currentlyTransitioning = true;
        if (languageIndicator) {
            languageIndicator.style.transform = 'rotate(-180deg)';
        }
        dropdownList.style.height = `${totalHeight}px`;
        dropdownList.addEventListener('transitionend', function() {
            dropdownListContent.forEach(function(item, index) {
                item.style.opacity = '1';
            });
        }, { once: true });
        dropdownListContent[1].addEventListener('transitionend', function() {
            currentlyTransitioning = false;
        }, { once: true });
    }
    else {
        if (currentlyTransitioning) {
            return;
        }
        currentlyTransitioning = true;
        if (languageIndicator) {
            languageIndicator.style.transform = 'rotate(0deg)';
        }
        dropdownListContent.forEach(function(item, index) {
            item.style.opacity = '0';
        });
        dropdownListContent[1].addEventListener('transitionend', function() {
            dropdownList.style.height = '0px';
            reset();
            }, { once: true });

    }

});

async function reset() {
    await delay(500);
    currentlyTransitioning = false;
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}