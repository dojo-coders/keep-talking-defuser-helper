const words = ['acesa', 'ajuda', 'amigo', 'antes', 'arcos', 'baile', 'balas', 'bispo', 'chefe','cheio', 'cinto', 'cravo', 'etapa', 'etnia', 'flora', 'lazer', 'legal', 'lugar', 'parte', 'parto', 'perto', 'porta', 'regra', 'resto', 'salve', 'sente', 'setor', 'sexta', 'tecla', 'tinta', 'torta', 'touro', 'trato', 'valer', 'veado']

const password = (pass) => {
    const rule = pass.map((col) => col.length === 0 ? '.' : '[' + col.join('') + ']').join('')
    const regex = new RegExp('^' + rule)
    const answer = words.filter((word) => regex.test(word))
    return answer
}
 
module.exports = password