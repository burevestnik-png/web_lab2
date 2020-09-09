import Toast from "../utilities/components/Toast.js";

export default class App {
    modal;

    constructor( graph ) {
        this.themeBtn = document.getElementById('theme-btn')
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

        this.themeBtn.addEventListener('click', this.changeTheme)
    }

    changeTheme( event, isDark = false ) {
        const themeElements = [
            document.querySelector('.nav-wrapper'),
            document.querySelector('footer'),
            document.getElementById('go-back')
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