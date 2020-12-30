const password = require('./index')

describe('password', () => {
    it('Deve retornar a palavra ETAPA', () => {
        expect(password([['m','e','p','v','x','l'],['y','d','n','b','t','z'],['a','s','l','k','z','b']])).toStrictEqual(['etapa'])
    })
})