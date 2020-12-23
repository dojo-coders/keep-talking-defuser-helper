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

module.exports = (serial, ...colors) => {
    switch (colors.length) {
    case 3:
        return threeWires(colors)
    case 4:
        return fourWires(serial, colors)
    default:
        return 0
    }

}