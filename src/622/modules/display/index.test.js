const {displayStep1, displayStep2} = require('./index');

describe('displayStep1', () => {
    it('Deve retornar 3 quando o texto do display for "SIM".', () => {
        expect(displayStep1('SIM')).toStrictEqual(3)
    })
    it('Deve retornar 5 quando o texto do display for "".', () => {
        expect(displayStep1('')).toStrictEqual(5)
    })

    describe('errors', () => {
        it('Deve lançar uma exceção quando não tiver a informação sobre o texto do display', () => {
            expect(() => {
                displayStep1(null)
            }).toThrowError('DISPLAY_TEXT_NOT_INFORMED')
        })
    })
})

describe('displayStep2', () => {
    it('Deve retornar [HMMMMM, O QUÊ?, ESQUERDA, NADA, PRONTO, ASSENTO, MEIO, NÃO, OK, PRIMEIRO, ACENTO, SIM, APERTA, CERTO] quando o texto do botão for "O QUÊ?".', () => {
        expect(displayStep2('O QUÊ?')).toStrictEqual(['HMMMMM', 'O QUÊ?', 'ESQUERDA', 'NADA', 'PRONTO', 'ASSENTO', 'MEIO', 'NÃO', 'OK', 'PRIMEIRO', 'ACENTO', 'SIM', 'APERTA', 'CERTO'])
    })
    it('Deve retornar [AHÃ, OCÊ, VOCÊ É, VOCÊ, BORA, CENSO, NÃO SEI, PRÓXIMO, CLARO, SENSO, CÊ É, C É, REPETE, QUÊ?] quando o texto do botão for "AHÃ".', () => {
        expect(displayStep2('AHÃ')).toStrictEqual(['AHÃ', 'OCÊ', 'VOCÊ É', 'VOCÊ', 'BORA', 'CENSO', 'NÃO SEI', 'PRÓXIMO', 'CLARO', 'SENSO', 'CÊ É', 'C É', 'REPETE', 'QUÊ?'])
    })

    describe('errors', () => {
        it('Deve lançar uma exceção quando não tiver a informação sobre o texto do botão', () => {
            expect(() => {
                displayStep2(null)
            }).toThrowError('BUTTON_TEXT_NOT_INFORMED')
        })
    })
})