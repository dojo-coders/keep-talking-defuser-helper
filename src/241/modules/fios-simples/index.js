
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

const fiveWires = (serial, colors) => {
    if (serialIsOdd(serial) && colors[4] === 'preto') {
        return 4
    }

    const yellowWires = colors.filter(color => color === 'amarelo')
    const redWires = colors.filter(color => color === 'vermelho')
    
    if (redWires.length === 1 && yellowWires.length > 1) {
        return 1
    }

    if (colors.indexOf('preto') === -1) {
        return 2
    }

    return 1
}

const sixWires = (serial, colors) => {
    if (serialIsOdd(serial) && colors.indexOf('amarelo') === -1) {
        return 3
    }
    
    const yellowWires = colors.filter(color => color === 'amarelo')
    const whiteWires = colors.filter(color => color === 'branco')
    
    if (yellowWires.length === 1 && whiteWires.length > 1) {
        return 4
    }

    if (colors.indexOf('vermelho') === -1) {
        return 6
    }

    return 4
}

const serialIsOdd = (serial) => {
    return parseInt(serial.substr(-1), 10) % 2 !== 0    
}

module.exports = (serial, ...colors) => {
    switch (colors.length) {
    case 3:
        return threeWires(colors)
    case 4:
        return fourWires(serial, colors)
    case 5:
        return fiveWires(serial, colors)
    case 6:
        return sixWires(serial, colors)
    }

}
