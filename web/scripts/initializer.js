import Toast from "./utilities/Toast.js";
import DataExtractor from "./utilities/DataExtractor.js";
import Validator from "./utilities/Validator.js";
import Graph from "./utilities/Graph";

const KEYS = {
    theme: 'theme'
}

const themeBtn = document.getElementById('theme-btn')
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');
const $rGroupButtons = $('.r-btn')
const $currentR = $('#current-r')
const $xCheckBoxes = $('input[name="x-group"]');
const $yInput = $('#y-value')

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
    Toast.successToast('Data was sent to server');
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

const resetHandler = (event) => {
    event.preventDefault();

    DataExtractor.setR(undefined);
    $currentR.text('No value selected');

    $('input[name="x-group"]:checked').click();

    $yInput.val('')
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
resetBtn.addEventListener('click', resetHandler)

$rGroupButtons.on('click', event => {
    DataExtractor.setR(Number(event.target.innerText))
    $currentR.text(Number(event.target.innerText))
});

$xCheckBoxes.on('click', function() {
    this.checked ? $(this).attr('checked', true) : $(this).attr('checked', false)
})

$('svg').on('click', ( event ) => {
    const clickPoint = Graph.getClickPoint(event);

    const r = DataExtractor.getR();
    if (r === undefined) {

    }

    /*this.graphicsService.changeDotPosition(clickPoint.x, clickPoint.y, this.currentRValue, true)
    $('#y-value').val('');
    $('.y-value-label').removeClass('active-input');
    $('input[name="x-group"]:checked').prop('checked', false);

    fetch(`${ this.config.get('SERVER_PATH') }hit.php`, {
        method: 'POST',
        body: this.formRequestFromClick(clickPoint.x, clickPoint.y, this.currentRValue)
    })
        .then(response => response.text())
        .then(data => {

        });*/
})
