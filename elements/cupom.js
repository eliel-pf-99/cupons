

function cupomBuilder(nome, sobrenome, tel, pedido) {
    let cupom = {
        nome: '',
        sobrenome: '',
        telefone: '',
        setor: 'ecommerce',
        numero: '',
        position: { top: 10, left: 30 },
        rotate: false,
        build: function () {
            cupom.rotate = cupom.rotate ? 'transform: rotate(90deg)' : '';
            return `<div class="ofc" style="top:${cupom.position.top}%; left:${cupom.position.left}%; ${cupom.rotate}">
        <div class="edit-img">
            <img src="./Asset 1.svg" alt="" srcset="">
            <p class="nome">${cupom.nome}</p>
            <p class="sobrenome">${cupom.sobrenome}</p>
            <p class="telefone">${cupom.telefone}</p>
            <p class="${cupom.setor}"><div class='selected-box ${cupom.setor}'></div></p>
            <p class="numero">${cupom.numero}</p>
        </div>
    </div>`
        }
    }

    cupom.nome = nome;
    cupom.telefone = tel;
    cupom.sobrenome = sobrenome;
    cupom.setor = "ecommerce";
    cupom.numero = pedido;

    return cupom;
}