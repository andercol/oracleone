
/* 
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

*/
let img = document.getElementById("img_result");
let msg_result = document.getElementById("mensagem_nao_encontrada");
let pResultado = document.getElementById('p-result');
let btn_copia = document.getElementById('copia');

function limpar() {
    img.style.display = "block";
    msg_result.style.display = "block";
    pResultado.innerHTML = "";
    btn_copia.style.display = "none";
}

function criptografar() {

    let txtarea = document.getElementById('txtarea').value;

    txtarea = txtarea.replace(/e/gi, 'enter');
    txtarea = txtarea.replace(/i/gi, 'imes');
    txtarea = txtarea.replace(/a/gi, 'ai');
    txtarea = txtarea.replace(/o/gi, 'ober');
    txtarea = txtarea.replace(/u/gi, 'ufat');

    pResultado.innerHTML = txtarea;

    img.style.display = "none";
    msg_result.style.display = "none";

    btn_copia.style.display = "block";

    document.getElementById('txtarea').value = "";
}


function descriptografar() {

    let txtarea = document.getElementById('txtarea').value;

    if (txtarea != "") {

        txtarea = txtarea.replace(/enter/gi, 'e');
        txtarea = txtarea.replace(/imes/gi, 'i');
        txtarea = txtarea.replace(/ai/gi, 'a');
        txtarea = txtarea.replace(/ober/gi, 'o');
        txtarea = txtarea.replace(/ufat/gi, 'u');

        pResultado.innerHTML = txtarea;
        img.style.display = "none";
        msg_result.style.display = "none";

        btn_copia.style.display = "block";

        document.getElementById('txtarea').value = "";
    } else {
        alert('Você precisa digitar um texto antes para descriptografar')
    }

}

function copiar() {

    var copyText = document.getElementById("p-result");
    navigator.clipboard.writeText(copyText.innerText);
}