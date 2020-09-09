export default class Toast {
    static errorToast( message ) {
        const toastHTML = `<span>${ message }</span>`;
        window.M.toast({
            html: toastHTML,
            classes: 'red'
        })
    }

    static infoToast( message ) {
        const toastHTML = `<span>${ message }</span>`;
        window.M.toast({
            html: toastHTML
        })
    }

    static successToast( message ) {
        const toastHTML = `<span>${ message }</span>`;
        window.M.toast({
            html: toastHTML,
            classes: 'green'
        })
    }
}