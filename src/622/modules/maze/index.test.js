const maze = require('./')

describe('maze', () => {
  it('Deve retornar uma única direção para a direita', () => {
    const resp = maze(['A2'], 'A1', 'B1')
    expect(resp).toStrictEqual(['R']) // right
  })

  it('Deve retornar um caminho bem complexo no segundo mapa', () => {
    const resp = maze(['B4'], 'A1', 'E5')
    expect(resp).toStrictEqual([
      'R', 'D', 'L', 'D', 'D', 'R', 'U', 'R', 'U', 'R', 'U', 'R', 'D', 'R', 'D', 'D', 'D', 'D', 'L', 'L', 'U', 'R'
    ])
  })
})
