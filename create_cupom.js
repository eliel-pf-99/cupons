let nome = '';
let sobrenome = '';
let telefone = '';
let setor = 'loja';
let numero = '';

let position = { top: 10, left: 30 };
let rotate = '';

function constructor(name, last_name, phone, str, number) {
    nome = name;
    sobrenome = last_name;
    telefone = phone;
    setor = str;
    numero = number;
}

function set_position(t, l) {
    position.top = t;
    position.left = l
}

function set_rotation(r) {
    if (r) {
        rotate = "transform: rotate(90deg);"
    }
}

function build_cupom() {
    return `<div class="ofc" style="top:${position.top}%; left:${position.left}%; ${rotate}">
        <div class="edit-img">
            <img src="./cupom.svg" alt="" srcset="">
            <p class="nome">${nome}</p>
            <p class="sobrenome">${sobrenome}</p>
            <p class="telefone">${telefone}</p>
            <p class="${setor}"><ion-icon name="checkmark-circle-outline"></ion-icon></p>
            <p class="numero">${numero}</p>
        </div>
    </div>`
}

function print_cupons() {
    var printContents = '';
    var itens = document.querySelectorAll(".a4");
    for (var i = 0; i < itens.length; i++) {
        printContents += itens[i].innerHTML;
    }
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = document.querySelector(".printArea").innerHTML;

    window.print();

    document.body.innerHTML = originalContents;
}