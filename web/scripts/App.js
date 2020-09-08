import Toast from "./utilities/Toast.js";
import DataExtractor from "./utilities/DataExtractor.js";
import Validator from "./utilities/Validator.js";

export default class App {
    constructor(graph) {
        debugger
        this.graph = graph;

        this.themeBtn = document.getElementById('theme-btn')
        this.submitBtn = document.getElementById('submit');
        this.resetBtn = document.getElementById('reset');
        this.$rGroupButtons = $('.r-btn')
        this.$currentR = $('#current-r')
        this.$xCheckBoxes = $('input[name="x-group"]');
        this.$yInput = $('#y-value')

        this.KEYS = {
            theme: 'theme'
        }
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            const theme = localStorage.getItem(this.KEYS.theme);

            if (!theme) {
                localStorage.setItem(this.KEYS.theme, 'white');
                return;
            }

            if (theme === 'dark') {
                this.changeTheme({}, true);
                this.themeBtn.checked = true;
            }
        });

        this.submitBtn.addEventListener('click', event => {
            event.preventDefault();

            const {x, y, r} = DataExtractor.getValues();

            if (!Validator.isInputValid(x, y, r)) {
                return;
            }
            Toast.successToast('Data was sent to server');
            console.log(x + " " + y + r + " -- params");

            $.post('/web/api', {
                xValues: x.join(" "),
                y: y,
                r: r
            }, (data) => {
                console.log(data);
            })
                .error(jqXHR => { console.log('Ошибка выполнения'); })
                .complete(() => { console.log('Завершение выполнения'); });
        })

        this.themeBtn.addEventListener('click', this.changeTheme)

        this.resetBtn.addEventListener('click', (event) => {
            event.preventDefault();

            DataExtractor.setR(undefined);
            this.$currentR.text('No value selected');

            $('input[name="x-group"]:checked').click();

            this.$yInput.val('')
        })

        this.$rGroupButtons.on('click', event => {
            DataExtractor.setR(Number(event.target.innerText))
            this.$currentR.text(Number(event.target.innerText))
        });

        this.$xCheckBoxes.on('click', function() {
            this.checked ? $(this).attr('checked', true) : $(this).attr('checked', false)
        })

        $('svg').on('click', ( event ) => {
            const clickPoint = this.graph.getClickPoint(event);

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
    }

    changeTheme(event, isDark = false) {
        const themeElements = [
            document.querySelector('.nav-wrapper'),
            document.querySelector('footer'),
            document.getElementById('submit'),
            document.getElementById('reset')
        ]

        document.body.classList.toggle('dark-theme')
        themeElements.forEach(value => value.classList.toggle('darken-4'))
        document.querySelectorAll('.r-btn').forEach(value => value.classList.toggle('darken-4'))

        if (!isDark) {
            Toast.infoToast('Theme was changed')

            localStorage.setItem(
                this.KEYS.theme,
                localStorage.getItem(this.KEYS.theme) === 'dark' ? 'white' : 'dark'
            )
        }
    }
}