const {button, buttonRelease} = require('./index');

describe('button', () => {
    let config = null

    describe('independente da quantidade de pilhas', () => {
        describe('independente dos valores do indicador', () => {
            beforeEach(() => {
                config = {}
            })

            it('Deve retornar "Mantenha o botão pressionado." quando a cor for azul e o texto for "Abortar".', () => {
                expect(button(config, 'blue', 'Abortar')).toStrictEqual('Mantenha o botão pressionado.')
            })

            it('Deve retornar "Mantenha o botão pressionado." quando a cor for amarelo.', () => {
                expect(button(config, 'yellow', '')).toStrictEqual('Mantenha o botão pressionado.')
            })

            it('Deve retornar "Pressione e solte o botão." quando a cor for vermelho e o texto for "Segure".', () => {
                expect(button(config, 'red', 'Segure')).toStrictEqual('Pressione e solte o botão.')
            })

            it('Deve retornar "Mantenha o botão pressionado." quando nenhuma das alternativas for aplicada.', () => {
                expect(button(config, '', '')).toStrictEqual('Mantenha o botão pressionado.')
            })
        })
        describe('quando o indicador for CAR', () => {

            beforeEach(() => {
                config = {
                    "ind-car": true
                }
            })

            it('Deve retornar "Mantenha o botão pressionado." quando a cor for branco e o indicador for "CAR"', () => {
                expect(button(config, 'white', '')).toStrictEqual('Mantenha o botão pressionado.')
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

            it('Deve retornar "Pressione e solte o botão." quando existe mais de uma pilha e o texto for "Detonar"', () => {
                expect(button(config, '', 'Detonar')).toStrictEqual('Pressione e solte o botão.')
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

            it('Deve retornar "Pressione e solte o botão." quando existe mais de duas pilha e o indicador for "FRK"', () => {
                expect(button(config, '', '')).toStrictEqual('Pressione e solte o botão.')
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
    it('Deve retornar "Solte quando o marcador de tempo tiver um 4 em qualquer posição." quando a cor for azul', () => {
        expect(buttonRelease('blue')).toStrictEqual('Solte quando o marcador de tempo tiver um 4 em qualquer posição.')
    })

    it('Deve retornar "Solte quando o marcador de tempo tiver um 5 em qualquer posição." quando a cor for amarelo', () => {
        expect(buttonRelease('yellow')).toStrictEqual('Solte quando o marcador de tempo tiver um 5 em qualquer posição.')
    })

    it('Deve retornar "Solte quando o marcador de tempo tiver um 1 em qualquer posição." quando a cor for qualquer outra', () => {
        expect(buttonRelease('white')).toStrictEqual('Solte quando o marcador de tempo tiver um 1 em qualquer posição.')
    })
})