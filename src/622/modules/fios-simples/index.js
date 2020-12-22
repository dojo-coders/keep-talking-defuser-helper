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

module.exports = (...colors) => {
    switch (colors.length) {
    case 3:
        return threeWires(colors)
        break
    default:
        return 0
    }
}