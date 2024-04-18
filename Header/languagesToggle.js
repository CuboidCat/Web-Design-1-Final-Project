document.querySelector('.languageDropdownButton').addEventListener('click', function() {
    var dropdownList = document.querySelector('.languageDropdownList');
    var header = document.getElementById('header');
    var languageIndicator = document.getElementById('languageArrow');
    languageIndicator.style.transition = 'transform 0.7s ease-in-out';

    // Configure the transition properties
    header.style.transition = 'padding-bottom 0.5s ease-in-out';
    dropdownList.style.transition = 'opacity 0.5s ease-in-out';

    // Toggle dropdown visibility
    if (dropdownList.style.display === 'none' || dropdownList.style.display === '') {
        // Set the initial state of the dropdown list to invisible and transparent
        dropdownList.style.display = 'block';
        dropdownList.style.opacity = '0';
        // Rotate the language indicator if applicable
        if (languageIndicator) {
            languageIndicator.style.transform = 'rotate(-180deg)';
        }
        // Calculate the dropdown height
        const dropdownHeight = dropdownList.clientHeight - 20; // Manually adjust for any extra space
        // Expand the header's padding to make space for the dropdown
        header.style.paddingBottom = `${dropdownHeight}px`;
        // Wait for the padding transition to finish before fading in the dropdown
        header.addEventListener('transitionend', function() {
            dropdownList.style.opacity = '1';
        }, { once: true });
    } else {
        // Rotate the language indicator back to its original state
        if (languageIndicator) {
            languageIndicator.style.transform = 'rotate(0deg)';
        }
        // Fade out the dropdown list
        dropdownList.style.opacity = '0';
        // Wait for the opacity transition to finish before hiding the dropdown and collapsing the header
        dropdownList.addEventListener('transitionend', function() {
            dropdownList.style.display = 'none';
            header.style.paddingBottom = '0';
        }, { once: true });
    }
});
