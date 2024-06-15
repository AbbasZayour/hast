// script.js

function redirectToPage(selectId) {
    const select = document.getElementById(selectId);
    const selectedValue = select.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}
