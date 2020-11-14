// Deslizamiento suave entre anclas.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Video en Modal.
const videoButton = document.querySelector('#video-button');
const modalBg = document.querySelector('.modal-background');
const closeModal = document.querySelector('.delete');
const modal = document.querySelector('.modal');

videoButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('is-active');
});
