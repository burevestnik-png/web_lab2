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

    const {xValues, y, r} = DataExtractor.getValues();

    const formData = new FormData();
    formData.append('y', y);
    formData.append('r', r);
    formData.append('x', xValues.join(' '));

    fetch('/', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
                console.log(data);
            }
        )
}