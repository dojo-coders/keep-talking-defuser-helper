const maze = require('./')

describe('maze', () => {
  it('bla', () => {
    const resp = maze(['A2'], 'A1', 'B1')
    expect(resp).toStrictEqual(['R']) // right
  })
})
