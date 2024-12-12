function build_page(page, cupons) {
    if (cupons.length > 7) {
        build_first_column(cupons.slice(0, 7), page);

        build_second_column(cupons.slice(7, 11), page)
    }
    else {
        build_first_column(cupons, page);
    }
}

function build_first_column(fisrt_cupons, page) {
    let top = -11;
    let left = 20;
    for (let cupom of fisrt_cupons) {
        console.log(cupom);
        cupom.position.top = top;
        cupom.position.left = left;
        cupom.rotate = false;
        page.innerHTML += cupom.build();
        top += 14;
    }
}

function build_second_column(second_cupons, page) {
    let top = 8;
    let left = 59;
    for (let i in second_cupons) {
        let cupom = second_cupons[i];
        cupom.rotate = true;
        cupom.position.top = top;
        cupom.position.left = left;
        page.innerHTML += cupom.build();
        left += 20.5;
        if (i == 1) {
            top += 41;
            left -= 41;
        }


    }
}

