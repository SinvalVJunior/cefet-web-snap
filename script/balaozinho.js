
const balao = document.querySelector('#balaozinho');
const marcacoes = document.getElementsByClassName('marcacao');

for(marcacao of marcacoes) {
    marcacao.addEventListener('mouseenter', (e) => {
        const titulo = e.target.attributes['data-titulo'].value;
        const tituloElement = document.createElement("h2");
        tituloElement.innerHTML = titulo;

        const conteudo = e.target.attributes['data-conteudo'].value;
        const conteudoElement = document.createElement("p");
        conteudoElement.innerHTML = conteudo;

        balao.appendChild(tituloElement);
        balao.appendChild(conteudoElement);

        const cor = e.target.attributes['data-cor'].value;
        balao.style.color = cor;
    });

    marcacao.addEventListener('mouseout', () => {
        balao.innerHTML = '';
    });

    marcacao.addEventListener('mousemove', (e) => {
        balao.style.top = `${e.pageY}px`;
        balao.style.left = `${e.pageX}px`;
    })
}