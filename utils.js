// Check device type: mobile or desktop
const detectDeviceType = () =>
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? "Mobile"
        : "Desktop";

// Recursively clear DOM
function emptyCardsList(element) {
    while(element.firstElementChild) {
        element.firstElementChild.remove();
    }
}

// Dropdown menu
const filter = document.getElementById("dropdown-content");
filter ? filter.addEventListener('click', dropDownToggle, false) : null;

function dropDownToggle() {
    filter.classList.toggle("show");
}

// Dark mode
function darkModeToggle() {
    const body = document.getElementById('body');
    const main = document.getElementById('main');

    if (body.classList.contains('dark') && main.classList.contains('dark')) {
        body.classList.remove('dark');
        main.classList.remove('dark');
    } else {
        body.classList.add('dark');
        main.classList.add('dark');
    }
}

export { detectDeviceType, emptyCardsList, dropDownToggle, darkModeToggle };
