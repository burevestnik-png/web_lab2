import Toast from "./utilities/Toast.js";

const KEYS = {
    theme: 'theme'
}

const themeBtn = document.getElementById('theme-btn')
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const $rGroupButtons = $('.r-btn')

const themeElements = [
    document.querySelector('.nav-wrapper'),
    document.querySelector('footer'),
    submitBtn,
    resetBtn
]

document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem(KEYS.theme);

    if (!theme) {
        localStorage.setItem(KEYS.theme, 'white');
        return;
    }

    if (theme === 'dark') {
        changeTheme({}, true);
        themeBtn.checked = true;
    }
});

themeBtn.addEventListener('click', changeTheme)

$rGroupButtons.on(
    'click',
        event => DataExtractor.setR(Number(event.target.innerText))
);