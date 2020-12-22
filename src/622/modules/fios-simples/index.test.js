const fiosSimples = require('./index')

describe('fios-simples', () => {
    describe('3 fios', () => {
        it('Deve cortar o segundo fio se não houver vermelho', () => {
            const resp = fiosSimples('preto', 'amarelo', 'preto')
            expect(resp).toBe(2)
        })

        it('Deve cortar o último fio se o último for branco', () => {
            const resp = fiosSimples('preto', 'vermelho', 'branco')
            expect(resp).toBe(3)
        })

        it('Deve cortar o último fio azul se houver mais de um azul', () => {
            const resp = fiosSimples('azul', 'azul', 'vermelho')
            expect(resp).toBe(2)
        })

        it('Deve cortar o último fio azul se houver mais de um azul (2)', () => {
            const resp = fiosSimples('azul', 'vermelho', 'azul')
            expect(resp).toBe(3)
        })

        it('Deve cortar o último fio quando nenhuma das opções acima exitirem', () => {
            const resp = fiosSimples('vermelho', 'branco', 'azul')
            expect(resp).toBe(3)
        })
    })
})