const threeWires = (wires) => {
    if (wires.indexOf('vermelho') === -1) {
        return 2
    }

    if (wires[2] === 'branco') {
        return 3
    }

    const blueWires = wires.filter(wire => wire === 'azul')

    if (blueWires.length >= 2) {
        return wires.lastIndexOf('azul') + 1
    }

    return 3
}


const fourWires = (serial, wires) => {

    const redWires = wires.filter(wire => wire === 'vermelho')
    const blueWires = wires.filter(wire => wire === 'azul')
    const yellowWires = wires.filter(wire => wire === 'amarelo')

    if (redWires.length >= 2 && serialIsOdd(serial)) {
        return wires.lastIndexOf('vermelho') + 1
    }
    if (wires[3] === 'amarelo' && redWires.length === 0){
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
        return threeWires(wires)
    case 4:
        return fourWires(serial, wires)
    default:
        return 0
    }

}

module.exports = simpleWires
