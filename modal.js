class Modal {
    constructor() {
        this.modalBackgroundElement = this.createDiv('modal-background');
        document.body.appendChild(this.modalBackgroundElement);
        this.modalBackgroundElement.addEventListener('click', () => {
            this.close();
        });
        this.modalElement = this.createDiv('modal');
        this.modalHeader = this.createDiv('modal-header');
        this.modalFooter = this.createFooter();
        this.modalContent = this.createDiv('modal-content');
        this.modalElement.appendChild(this.modalHeader);
        this.modalElement.appendChild(this.modalContent);
        this.modalElement.appendChild(this.modalFooter);
        document.body.appendChild(this.modalElement);
    }

    open(content) {
        this.modalContent.innerHTML = content;
        this.modalBackgroundElement.classList.add('open');
        this.modalElement.classList.add('open');
    }

    close() {
        this.modalBackgroundElement.classList.remove('open');
        this.modalElement.classList.remove('open');
    }
    createDiv(className) {
        const div = document.createElement('div');
        div.className = className;
        return div;
    }

    createFooter() {
        const footer = this.createDiv('modal-footer');
        const accept = document.createElement('button');
        accept.innerText = 'OK';
        const cancel = document.createElement('button');
        cancel.innerText = 'Anuluj';
        footer.appendChild(accept);
        footer.appendChild(cancel);
        return footer;
    }
}

const modal = new Modal();
    modal.open('Lorem ipsum fortunatum');

