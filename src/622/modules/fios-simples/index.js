const threeWires = (colors) => {
    if (colors.indexOf('vermelho') === -1) {
        return 2
    }

    if (colors[2] === 'branco') {
        return 3
    }

    const blueWires = colors.filter(color => color === 'azul')

    if (blueWires.length >= 2) {
        return colors.lastIndexOf('azul') + 1
    }

    return 3
}


const fourWires = (serial, colors) => {

    const redWires = colors.filter(color => color === 'vermelho')
    const blueWires = colors.filter(color => color === 'azul')
    const yellowWires = colors.filter(color => color === 'amarelo')

    if (redWires.length >= 2 && serialIsOdd(serial)) {
        return colors.lastIndexOf('vermelho') + 1
    }
    if (colors[3] === 'amarelo' && redWires.length === 0){
        return 1
    }
    if (blueWires.length === 1){
        return 1
    }
    if (yellowWires.length > 1){
        return 4
    }
    return 2
}

const serialIsOdd = (serial) => {
    return parseInt(serial.substr(-1), 10) % 2 !== 0    
}

/**
 * Função responsável por resolver o módulo de fios simples.
 * @param {string} serial - Número de série da bomba
 * @param {string} fio_1 - Cor do primeiro fio
 * @param {string} fio_2 - Cor do segundo fio
 * @param {string} fio_3 - Cor do terceiro fio
 * @param {string} [fio_4] - Cor do quarto fio
 * @param {string} [fio_5] - Cor do quinto fio
 * @param {string} [fio_6] - Cor do sexto fio
 * @returns {number} O número do fio a ser cortado
 */
const simpleWires = (serial, ...colors) => {
    switch (colors.length) {
    case 3:
        return threeWires(colors)
    case 4:
        return fourWires(serial, colors)
    default:
        return 0
    }

}

module.exports = simpleWires
