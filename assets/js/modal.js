const modalBtn = document.querySelectorAll('[data-modal');
const body = document.body;
const modalClose = document.querySelectorAll('.modal_close');
const modal = document.querySelectorAll('.modal');



// плавный выкат/вкат  модалок

// выкат/плавность (анимация)
modalBtn.forEach(item => {

    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = document.querySelector('.modal_content');

        modalContent.addEventListener('click', event => event.stopPropagation()
        );

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(function() {
            modalContent.style.transform = 'none';
            modalContent.style.opacity = '1';

        }, 1);

    })
});

modalCLose.forEach(item => {

    item.addEventListener('click', event => {
        let currentModal = event.currentTarget.closest('.modal');

        closeModal(currentModal);
    })
})

modalCLose.forEach(item => {

    item.addEventListener('click', event => {
        let currentModal = event.currentTarget;

        closeModal(currentModal);
    })
})

// вкат и плавность
function closeModal(currentModal) {

    let modalContent = currentModel.querySelector('.modal_content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        modal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);
}