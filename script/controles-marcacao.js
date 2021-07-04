
const checkboxMarcacoes = document.getElementById('visibilidade-das-marcacoes');

checkboxMarcacoes.addEventListener('click', (e) => {
    const el = document.querySelector('.foto-anotada');
    el.classList.toggle(`${e.target.value}`);
});

for(marcacao of marcacoes) {

    marcacao.addEventListener('click', (e) => {

        const marcacaoSelecionada = document.querySelector('.selecionada');
        marcacaoSelecionada.classList.toggle('selecionada');
        e.target.classList.toggle('selecionada');

        const x_field = document.querySelector('#x-da-marcacao');
        x_field.value = parseInt(e.target.style.left);

        const y_field = document.querySelector('#y-da-marcacao');
        y_field.value = parseInt(e.target.style.top);

        const width_field = document.querySelector('#largura-da-marcacao');
        width_field.value = parseInt(e.target.style.width);

        const height_field = document.querySelector('#altura-da-marcacao');
        height_field.value = parseInt(e.target.style.height);

        const title_field = document.querySelector('#titulo-da-marcacao');
        title_field.value = e.target.attributes['data-titulo'].value;

        const content_field = document.querySelector('#conteudo-da-marcacao');
        content_field.value = e.target.attributes['data-conteudo'].value;

        const color_field = document.querySelector('#cor-da-marcacao');
        color_field.value = e.target.attributes['data-cor'].value;

        const checkBoxRetangular = document.querySelector('[value="formato-retangular"]');
        const checkBoxOval = document.querySelector('[value="formato-oval"]');

        if(e.target.attributes['data-formato'] === 'formato-oval') {
            checkBoxRetangular.checked = false;
            checkBoxOval.checked = true;
        } else {
            checkBoxRetangular.checked = true;
            checkBoxOval.checked = false;
        }


    });

const x_field = document.getElementById('x-da-marcacao');
x_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.style.left = `${e.target.value}px`
});

const y_field = document.getElementById('y-da-marcacao');
y_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.style.top = `${e.target.value}px`
});

const height_field = document.getElementById('altura-da-marcacao');
height_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.style.height = `${e.target.value}px`
});

const width_field = document.getElementById('largura-da-marcacao');
width_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.style.width = `${e.target.value}px`
});

const title_field = document.getElementById('titulo-da-marcacao');
title_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.setAttribute('data-titulo', e.target.value);
});

const content_field = document.getElementById('conteudo-da-marcacao');
content_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.setAttribute('data-conteudo', e.target.value);
});

const color_field = document.getElementById('cor-da-marcacao');
color_field.addEventListener('input', (e) => {
    const marcacaoSelectiona = document.querySelector('.selecionada');
    marcacaoSelectiona.setAttribute('data-cor', e.target.value);
});

}