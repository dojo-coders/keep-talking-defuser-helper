const fiosSimples = require('./index')

const serialEven = 'assa52'
const serialOdd = 'erere3'
const serialUnd = undefined

describe('fios-simples', () => {
    describe('3 fios', () => {
        it('Deve cortar o segundo fio se não houver vermelho', () => {
            const resp = fiosSimples(serialEven, 'preto', 'amarelo', 'preto')
            expect(resp).toBe(2)
        })

        it('Deve cortar o último fio se o último for branco', () => {
            const resp = fiosSimples(serialEven, 'preto', 'vermelho', 'branco')
            expect(resp).toBe(3)
        })

        it('Deve cortar o último fio azul se houver mais de um azul', () => {
            const resp = fiosSimples(serialEven, 'azul', 'azul', 'vermelho')
            expect(resp).toBe(2)
        })

        it('Deve cortar o último fio azul se houver mais de um azul (2)', () => {
            const resp = fiosSimples(serialEven, 'azul', 'vermelho', 'azul')
            expect(resp).toBe(3)
        })

        it('Deve cortar o último fio quando nenhuma das opções acima exitirem', () => {
            const resp = fiosSimples(serialEven, 'vermelho', 'branco', 'azul')
            expect(resp).toBe(3)
        })
    })

    describe('4 fios', () => {
        it('Deve cortar ultimo vermelho se mais de um fio vermelho e ultimo digito do serial for impar', () => {
            const resp = fiosSimples(serialOdd, 'vermelho', 'branco', 'vermelho', 'preto')
            expect(resp).toBe(3)
        })

        it('Deve cortar ultimo vermelho se mais de um fio vermelho e ultimo digito do serial for impar', () => {
            const resp = fiosSimples(serialEven, 'vermelho', 'branco', 'preto', 'vemelho')
            expect(resp).toBe(2)
        })

        it('Deve cortar o primeiro fio se o ultimo for amarelo e nao houver vermelhos', () => {
            const resp = fiosSimples(serialEven, 'preto', 'branco', 'preto', 'amarelo')
            expect(resp).toBe(1)
        })

        it('Deve cortar o primeiro fio se houver exatamente um azul', () => {
            const resp = fiosSimples(serialEven, 'azul', 'branco', 'preto', 'vermelho')
            expect(resp).toBe(1)
        })

        it('Deve cortar o último fio se houver mais de um fio amarelo', () => {
            const resp = fiosSimples(serialEven, 'amarelo', 'amarelo', 'vermelho', 'preto')
            expect(resp).toBe(4)
        })

        it('Deve cortar o segundo fio quando nenhuma das opções acima exitirem', () => {
            const resp = fiosSimples(serialEven, 'branco', 'branco', 'branco', 'branco')
            expect(resp).toBe(2)
        })
    })
})