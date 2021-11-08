// увеличение текстового поля при наборе текста

const textArea = document.querySelectorAll('[data-autoresize]');

textArea.forEach(item => {
    item.addEventListener('input', event => {
        let textAreah = item.offsetHeight;
        let $this = event.target;

        $this.style.height = textAreah + 'px';
        $this.style.height = $this.scrollHeight + 'px';
    });

})