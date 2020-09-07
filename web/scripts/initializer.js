import Toast from "./utilities/Toast.js";
import DataExtractor from "./utilities/DataExtractor.js";

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

    console.log("here blyat");

    const {xValues, y, r} = DataExtractor.getValues();

    console.log(xValues + " " + y + r + " -- params");

    const formData = new FormData();
    formData.append('y', y);
    formData.append('r', r);
    formData.append('x', xValues.join(' '));

    $.post('/web/api', {
        xValues: xValues.join(" "),
        y: y,
        r: r
    }, function(data) {
        console.log(data); // ответ от сервера
    })
        .error(function(jqXHR) { console.log('Ошибка выполнения'); })
        .complete(function() { console.log('Завершение выполнения'); });

    // fetch('/web/api', {
    //     method: 'POST',
    //     body: formData
    // })
    //     .then(response => response.text())
    //     .then(data => {
    //             console.log(data);
    //         }
    //     )
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
