const password = require('./index')

describe('password', () => {
    it('Deve retornar a palavra ETAPA', () => {
        expect(password([['m','e','p','v','x','l'],['y','d','n','b','t','z'],['a','s','l','k','z','b']])).toStrictEqual(['etapa'])
    })
    it('Deve retornar a palavra PORTA', () => {
        expect(password([['r','z','k','p','g','u'],[],['x','l','h','t','s','r'],[],['i','w','m','b','g','a']])).toStrictEqual(['porta'])
    })
    it('Deve retornar a palavra PERTO', () => {
        const a = 'dmxfqp'.split('')
        const b = 'qeizdu'.split('')
        const c = 'tmhpgo'.split('')
        const d = 'mnoqdi'.split('')
        expect(password([a,b,[],c,d])).toStrictEqual(['perto'])
    })
})