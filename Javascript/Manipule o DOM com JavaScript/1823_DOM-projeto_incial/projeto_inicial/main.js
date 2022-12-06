
import BotaoConclui from "./componentes/concluiTarefa.js";
import BotaoDeleta from "./componentes/deletaTarefa.js";


const criarTarefa = (evento) => {

    evento.preventDefault(); //previne comportamento padrao do formulário que é tentar enviar para algum lugar

    const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(BotaoConclui());
    tarefa.appendChild(BotaoDeleta());
    lista.appendChild(tarefa);
    input.valor = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);



//old version
/* novaTarefa.addEventListener('click', ()=> {
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor) 
}); */