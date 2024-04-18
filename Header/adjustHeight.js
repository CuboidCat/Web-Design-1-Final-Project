let headerHeight = '';



function adjustHeader() {
    var dropdownList = document.querySelector('.languageDropdownList');
    // Select the header element by its class or id
    const header = document.getElementById('header'); // Assuming the header has an id of "header"

    // Check the current window width directly
    if (window.innerWidth <= 700) {
        // If the window width is 700px or less, set the height to "auto"
        header.style.transition = 'none'; // Disable any existing transitions
        header.style.paddingBottom = '0';
    }
    else {
        if (headerHeight === '' && dropdownList.style.display === 'block') {
            headerHeight = header.style.paddingBottom;

        }
        if(dropdownList.style.display === 'block' && header.style.paddingBottom === '0px') {
            console.log('here')
            header.style.paddingBottom = headerHeight;
        }
    }
}

// Add event listener for the resize event
window.addEventListener('resize', adjustHeader);