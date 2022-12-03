const menuOpen = document.querySelector('.menu__open');
const menuClose = document.querySelector('.menu__close');
const itemsContainer = document.querySelector('.items__container')


menuOpen.addEventListener('click', function () {
    this.style.display = 'none';
    itemsContainer.style.display = 'block';
    menuClose.style.display = 'block';
})

menuClose.addEventListener('click', function () {
    this.style.display = 'none';
    itemsContainer.style.display = 'none';
    menuOpen.style.display = 'block';
})