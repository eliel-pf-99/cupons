let add = document.querySelector("#add");
add.addEventListener("click", e => {
    e.preventDefault();
    catch_cupom();
});

let make = document.querySelector("#make");
make.addEventListener("click", e => {
    e.preventDefault();
    gerar();
})

const clientes = [];

let name_ = document.querySelector("#name")
let last_name = document.querySelector("#sobrenome")
let cel = document.querySelector("#telefone")
let order = document.querySelector("#pedido")
let value = document.querySelector("#valor")
let sector = document.querySelector("#setor")

const cupons = [];

function catch_cupom() {
    const nome = name_.value
    const sobrenome = last_name.value
    const tel = cel.value
    const pedido = order.value
    const valor = value.value
    const quantidade = how_much_cupons(valor);
    const setor = sector.value;

    const cupom = { nome, sobrenome, tel, pedido, valor, quantidade, setor };
    cupons.push(build_final(cupom));

    name_.value = '';
    last_name.value = '';
    cel.value = '';
    order.value = '';
    value.value = '';

    addClientePage(nome, sobrenome, tel, pedido, valor, how_much_cupons(valor));

}

function setValue(value) {
    cupons.push(value);
}

const res = [];
function create_list() {
    for (let a of cupons) {
        let list = build_final(a);
        setValueRes(list);
    }
}

function setValueRes(cup) {
    res.push(cup);
    console.log(res);
}

function gerar() {
    let res = [];
    for (let cups of cupons) {
        res = res.concat(cups);
    }
    console.log(res);
    divid_array(res);
}

function addClientePage(nome, sobrenome, tel, pedido, valor, cupons) {
    let element = `<div class="client">
                <p id="c_name">${nome}</p>
                <p id="c_last_name">${sobrenome}</p>
                <p id="c_tel">${tel}</p>
                <p id="c_order">${pedido}</p>
                <p id="c_value">${valor}</p>
                <p id="c_number">${cupons}<p>
            </div>`
    document.querySelector(".clientes").innerHTML += element;
}


function how_much_cupons(valor) {
    return Math.floor(valor / PATTERN_VALUE);
}

function build_final(c) {
    return fill_cupons(cupomBuilder(c.nome, c.sobrenome, c.tel, c.pedido, c.setor), how_much_cupons(c.valor));
}

function fill_cupons(cupom, times) {
    let res = []
    for (let i = 0; i < times; i++) {
        res.push(cupom);
    }
    return res;
}
