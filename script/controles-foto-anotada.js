const filter_select = document.querySelector('#filtro-da-foto');
const image = document.querySelector('.foto-anotada > img');

filter_select.addEventListener('change', (e) => {
    image.style.filter = e.target.value;
});