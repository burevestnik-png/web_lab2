const KEYS = {
    theme: 'theme'
}

const themeBtn = document.getElementById('theme-btn')
const submitBtn = document.getElementById('submit');
const resetBtn = document.getElementById('reset');

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