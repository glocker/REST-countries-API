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

export { detectDeviceType, emptyCardsList };
