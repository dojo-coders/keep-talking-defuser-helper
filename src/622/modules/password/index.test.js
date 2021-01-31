const password = require('./index')

describe('password', () => {
    it('Deve retornar a palavra ETAPA', () => {
        const a = 'mepvxl'.split('')
        const b = 'ydnbtz'.split('')
        const c = 'aslkzb'.split('')
        expect(password(a,b,c)).toStrictEqual(['etapa'])
    })
    it('Deve retornar a palavra PORTA', () => {
        const a = 'rzkpgu'.split('')
        const b = 'xlhtsr'.split('')
        const c = 'iwmbga'.split('')
        expect(password(a,[],b,[],c)).toStrictEqual(['porta'])
    })
    it('Deve retornar a palavra PERTO', () => {
        const a = 'dmxfqp'.split('')
        const b = 'qeizdu'.split('')
        const c = 'tmhpgo'.split('')
        const d = 'mnoqdi'.split('')
        expect(password(a,b,[],c,d)).toStrictEqual(['perto'])
    })
    it('Deve retornar array vazia caso não ache a palavra', () => {
        const a = 'aaaaaa'.split('')
        const b = 'aaaaaa'.split('')
        const c = 'aaaaaa'.split('')
        const d = 'aaaaaa'.split('')
        expect(password(a,b,[],c,d)).toStrictEqual([])
    })
})