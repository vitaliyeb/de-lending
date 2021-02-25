const burgerBtn = document.getElementById('burger');


burgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
});