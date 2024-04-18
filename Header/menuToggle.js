function dropDown() {

    this.classList.toggle('rotated')
    const dropdown = document.getElementById('dropdownContent');
    dropdown.style.transition = "max-height 1.5s ease-in-out";

    if (dropdown.style.maxHeight === "0px") {
        dropdown.style.maxHeight = "500px";
        const items = dropdown.getElementsByClassName('dropdownItem');
        Array.from(items).forEach(function(item, index) {
            // Stagger the animation by adding a delay based on the index
            if (item.style.opacity === '0') {
                return;
            }
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('dropdown-item-animated');
            // Remove the class after the animation completes
            item.addEventListener('animationend', function() {
                item.classList.remove('dropdown-item-animated');
                item.style.animationDelay = '0s';  // Reset delay to prepare for next time
            }, {once: true});
        });



    } else {
        dropdown.style.maxHeight = "0px";
    }
}

const button = document.getElementById('menuToggle');
button.addEventListener('click', dropDown);
button.style.transition = "transform 1s ease";
button.style.transformOrigin = '50% 55.5%';



document.getElementById('dropdownContent').style.maxHeight = "0px";