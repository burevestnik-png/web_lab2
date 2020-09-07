import Toast from "./utilities/Toast.js";
import DataExtractor from "./utilities/DataExtractor.js";
import Validator from "./utilities/Validator.js";

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

const changeTheme = (event, isDark = false) => {
    document.body.classList.toggle('dark-theme')
    themeElements.forEach(value => value.classList.toggle('darken-4'))
    document.querySelectorAll('.r-btn').forEach(value => value.classList.toggle('darken-4'))

    if (!isDark) {
        Toast.infoToast('Theme was changed')

        localStorage.setItem(
            KEYS.theme,
            localStorage.getItem(KEYS.theme) === 'dark' ? 'white' : 'dark'
        )
    }
}

const submitHandler = (event) => {
    event.preventDefault();

    const {x, y, r} = DataExtractor.getValues();

    if (!Validator.isInputValid(x, y, r)) {
        return;
    }

    const formData = new FormData();
    formData.append('y', y);
    formData.append('r', r);
    formData.append('x', x.join(' '));

    /*fetch('/', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
                console.log(data);
            }
        )*/
}

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
submitBtn.addEventListener('click', submitHandler)

$rGroupButtons.on('click', event => DataExtractor.setR(Number(event.target.innerText)));
