import Toast from "./utilities/components/Toast.js";
import DataExtractor from "./utilities/services/DataExtractor.js";
import Validator from "./utilities/services/Validator.js";
import ModalWindow from "./utilities/components/Modal.js";

export default class App {
    modal;

    constructor( graph ) {
        this.graph = graph;

        this.themeBtn = document.getElementById('theme-btn')
        this.submitBtn = document.getElementById('submit')
        this.resetBtn = document.getElementById('reset')
        this.clearSvgBtn = document.getElementById('clear-svg')

        this.$rGroupButtons = $('.r-btn')
        this.$currentR = $('#current-r')
        this.$xCheckBoxes = $('input[name="x-group"]');
        this.$yInput = $('#y-value')
    }

    init() {
        document.addEventListener("DOMContentLoaded", () => {
            const theme = localStorage.getItem('theme');

            if (!theme) {
                localStorage.setItem('theme', 'white');
                return;
            }

            if (theme === 'dark') {
                this.changeTheme({}, true);
                this.themeBtn.checked = true;
            }

            this.modal = new ModalWindow();
        });

        this.submitBtn.addEventListener('click', event => {
            event.preventDefault();

            const { x, y, r } = DataExtractor.getValues();

            if (!Validator.isInputValid(x, y, r)) {
                return;
            }
            Toast.successToast('Data was sent to server');

            this.graph.drawDots(x, y, r, false)

            $.post('/web/api', {
                xValues: x.join(" "),
                y: y,
                r: r
            }, ( data ) => {
                console.log(data);
            })
                .error(jqXHR => {
                    console.log('Ошибка выполнения');
                })
                .complete(() => {
                    console.log('Завершение выполнения');
                });
        })

        this.themeBtn.addEventListener('click', this.changeTheme)

        this.clearSvgBtn.addEventListener('click', () => {
            this.graph.clearSvg();
            Toast.infoToast('Picture was cleared')
        })

        this.resetBtn.addEventListener('click', ( event ) => {
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

        this.$xCheckBoxes.on('click', function () {
            this.checked ? $(this).attr('checked', true) : $(this).attr('checked', false)
        })

        $('svg').on('click', ( event ) => {
            const clickPoint = this.graph.getClickPoint(event);

            const r = DataExtractor.getR();
            if (r === undefined) {
                this.modal.open(
                    "Oops",
                    "It seems that you hadn't chosen R value"
                )
                return;
            }

            this.graph.drawDots([ clickPoint.x ], clickPoint.y, r, true)
            $('input[name="x-group"]:checked').click();
            this.$yInput.val('')

            Toast.successToast('Data was sent to server');
            $.post('/web/api', {
                xValues: clickPoint.x,
                y: clickPoint.y,
                r: r
            }, ( data ) => {
                console.log(data);
            })
                // .error(jqXHR => { console.log('Ошибка выполнения'); })
                .complete(() => {
                    console.log('Завершение выполнения');
                });
        })
    }

    changeTheme( event, isDark = false ) {
        const themeElements = [
            document.querySelector('.nav-wrapper'),
            document.querySelector('footer'),
            document.getElementById('submit'),
            document.getElementById('reset'),
            document.getElementById('modal-btn'),
            document.getElementById('clear-svg')
        ];

        document.body.classList.toggle('dark-theme')
        themeElements.forEach(value => value.classList.toggle('darken-4'))
        document.querySelectorAll('.r-btn').forEach(value => value.classList.toggle('darken-4'))

        if (!isDark) {
            Toast.infoToast('Theme was changed')

            localStorage.setItem(
                'theme',
                localStorage.getItem('theme') === 'dark' ? 'white' : 'dark'
            )
        }
    }
}