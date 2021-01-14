const {button, buttonRelease} = require('./index');

describe('button', () => {
    let config = null

    describe('independente da quantidade de pilhas', () => {
        describe('independente dos valores do indicador', () => {
            beforeEach(() => {
                config = {}
            })

            it('Deve retornar HOLD quando a cor for azul e o texto for "Abortar".', () => {
                expect(button(config, 'blue', 'Abortar')).toStrictEqual('HOLD')
            })

            it('Deve retornar HOLD quando a cor for amarelo.', () => {
                expect(button(config, 'yellow', '')).toStrictEqual('HOLD')
            })

            it('Deve retornar CLICK quando a cor for vermelho e o texto for "Segure".', () => {
                expect(button(config, 'red', 'Segure')).toStrictEqual('CLICK')
            })

            it('Deve retornar HOLD quando nenhuma das alternativas for aplicada.', () => {
                expect(button(config, '', '')).toStrictEqual('HOLD')
            })
        })
        describe('quando o indicador for CAR', () => {

            beforeEach(() => {
                config = {
                    "ind-car": true
                }
            })

            it('Deve retornar HOLD quando a cor for branco e o indicador for "CAR"', () => {
                expect(button(config, 'white', '')).toStrictEqual('HOLD')
            })
        })
    })
    describe('quando a quantidade de pilhas é maior que 1', () => {
        describe('independente dos valores do indicador', () => {
            beforeEach(() => {
                config = {
                    "batteries":2
                }
            })

            it('Deve retornar CLICK quando existe mais de uma pilha e o texto for "Detonar"', () => {
                expect(button(config, '', 'Detonar')).toStrictEqual('CLICK')
            })
        })
    })
    describe('quando a quantidade de pilhas é maior que 2', () => {
        describe('quando o indicador for FRK', () => {
            beforeEach(() => {
                config = {
                    "batteries":3,
                    "ind-frk":true
                }
            })

            it('Deve retornar CLICK quando existe mais de duas pilha e o indicador for "FRK"', () => {
                expect(button(config, '', '')).toStrictEqual('CLICK')
            })
        })
    })
    describe('errors', () => {
        it('Deve lançar uma exceção quando não tiver a informação sobre a quantidade de pilhas', () => {
            const config = {"batteries":null}

            expect(() => {
                button(config, '', '')
            }).toThrowError('CONFIG:BATTERIES_NOT_INFORMED')
        })

        it('Deve lançar uma exceção quando não tiver a informação sobre o indicador CAR', () => {
            const config = {"ind-car":null}
            
            expect(() => {
                button(config, '', '')
            }).toThrowError('CONFIG:IND-CAR_NOT_INFORMED')
        })

        it('Deve lançar uma exceção quando não tiver a informação sobre o indicador FRK', () => {
            const config = {"ind-frk":null}
            
            expect(() => {
                button(config, '', '')
            }).toThrowError('CONFIG:IND-FRK_NOT_INFORMED')
        })
    })
})

describe('buttonRelease', () => {
    it('Deve retornar 4 quando a cor for azul', () => {
        expect(buttonRelease('blue')).toStrictEqual(4)
    })

    it('Deve retornar 5 quando a cor for amarelo', () => {
        expect(buttonRelease('yellow')).toStrictEqual(5)
    })

    it('Deve retornar 1 quando a cor for qualquer outra', () => {
        expect(buttonRelease('white')).toStrictEqual(1)
    })
})