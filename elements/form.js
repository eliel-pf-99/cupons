

const PATTERN_CUPOM = 11;
const PATTERN_VALUE = 50;



function divid_array(cupons) {
    while (cupons.length > 0) {
        if (cupons.length > 11) {
            let short_cupons = cupons.splice(0, 11);
            create_pages(makeid(5), short_cupons);
        }
        else {
            create_pages(makeid(5), cupons);
            break;
        }

    }
}

function create_pages(id, cupons) {
    document.querySelector(".printArea").innerHTML += `<div class="a4" id="${id}"></div>`;
    build_page(document.querySelector(`#${id}`), cupons);
}

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


