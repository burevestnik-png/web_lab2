export default class ModalWindow {
    constructor() {
        const elem = document.querySelector('.modal');
        this.instance = M.Modal.init(elem, {
            preventScrolling: false
        });
    }

    open( header = 'mok', content = 'mok' ) {
        const nodes = this.instance.el.children[0].children;
        nodes[0].innerText = header;
        nodes[1].innerText = content;
        this.instance.open();
    }

    close() {
        this.instance.close();
    }
}