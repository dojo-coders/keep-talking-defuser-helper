const buttonPosition = {
                    SIM: 3,
                    'VOCÊ É': 2,
                    DISPLAY: 6,
                    OK: 2,
                    'TÁ FALANDO': 6,
                    NADA: 3,
                    '': 5,
                    VAZIO: 4,
                    NÃO: 6,
                    CELA: 3,
                    SELA: 6,
                    CEM: 4,
                    SEXTA:4, 
                    CESTA: 5,
                    SEM: 5,
                    'CALMA AÍ': 6,
                    'DE NOVO': 4,
                    CAUDA: 6,
                    CALDA: 4,
                    'VC É': 4,
                    BOOM: 1,
                    ERROU: 6,
                    MAS: 5,
                    MAIS: 4,
                    NUNCA: 3,
                    SE: 6,
                    C: 2,
                    SER: 6
}

const buttonText = {
    PRONTO: ['SIM', 'OK', 'O QUÊ?', 'MEIO', 'ESQUERDA', 'APERTA', 'CERTO', 'ASSENTO', 'PRONTO', 'NÃO', 'PRIMEIRO', 'HMMMMM', 'NADA', 'ACENTO'],
    PRIMEIRO: ['ESQUERDA', 'OK', 'SIM', 'MEIO', 'NÃO', 'CERTO', 'NADA', 'HMMMMM', 'ACENTO', 'PRONTO', 'ASSENTO', 'O QUÊ?', 'APERTA', 'PRIMEIRO'],
    NÃO: ['ASSENTO', 'HMMMMM', 'ACENTO', 'PRIMEIRO', 'O QUÊ?', 'PRONTO', 'CERTO', 'SIM', 'NADA', 'ESQUERDA', 'APERTA', 'OK', 'NÃO', 'MEIO'],
    ASSENTO: ['ACENTO', 'CERTO', 'OK', 'MEIO', 'ASSENTO', 'APERTA', 'PRONTO', 'NADA', 'NÃO', 'O QUÊ?', 'ESQUERDA', 'HMMMMM', 'SIM', 'PRIMEIRO'],
    NADA: ['HMMMMM', 'CERTO', 'OK', 'MEIO', 'SIM', 'ASSENTO', 'NÃO', 'APERTA', 'ESQUERDA', 'O QUÊ?', 'ACENTO', 'PRIMEIRO', 'NADA', 'PRONTO'],
    SIM: ['OK', 'CERTO', 'HMMMMM', 'MEIO', 'PRIMEIRO', 'O QUÊ?', 'APERTA', 'PRONTO', 'NADA', 'SIM', 'ESQUERDA', 'ASSENTO', 'NÃO', 'ACENTO'],
    'O QUÊ?': ['HMMMMM', 'O QUÊ?', 'ESQUERDA', 'NADA', 'PRONTO', 'ASSENTO', 'MEIO', 'NÃO', 'OK', 'PRIMEIRO', 'ACENTO', 'SIM', 'APERTA', 'CERTO'],
    HMMMMM: ['PRONTO', 'NADA', 'ESQUERDA', 'O QUÊ?', 'OK', 'SIM', 'CERTO', 'NÃO', 'APERTA', 'ASSENTO', 'HMMMMM', 'MEIO', 'ACENTO', 'PRIMEIRO'],
    ESQUERDA: ['CERTO', 'ESQUERDA', 'PRIMEIRO', 'NÃO', 'MEIO', 'SIM', 'ASSENTO', 'O QUÊ?', 'HMMMMM', 'ACENTO', 'APERTA', 'PRONTO', 'OK', 'NADA'],
    CERTO: ['SIM', 'NADA', 'PRONTO', 'APERTA', 'NÃO', 'ACENTO', 'O QUÊ?', 'CERTO', 'MEIO', 'ESQUERDA', 'HMMMMM', 'ASSENTO', 'OK', 'PRIMEIRO'],
    MEIO: ['ASSENTO', 'PRONTO', 'OK', 'O QUÊ?', 'NADA', 'APERTA', 'NÃO', 'ACENTO', 'ESQUERDA', 'MEIO', 'CERTO', 'PRIMEIRO', 'HMMMMM', 'SIM'],
    OK: ['MEIO', 'NÃO', 'PRIMEIRO', 'SIM', 'HMMMMM', 'NADA', 'ACENTO', 'OK', 'ESQUERDA', 'PRONTO', 'ASSENTO', 'APERTA', 'O QUÊ?', 'CERTO'],
    ACENTO: ['HMMMMM', 'NÃO', 'ASSENTO', 'OK', 'SIM', 'ESQUERDA', 'PRIMEIRO', 'APERTA', 'O QUÊ?', 'ACENTO', 'NADA', 'PRONTO', 'CERTO', 'MEIO'],
    APERTA: ['CERTO', 'MEIO', 'SIM', 'PRONTO', 'APERTA', 'OK', 'NADA', 'HMMMMM', 'ASSENTO', 'ESQUERDA', 'PRIMEIRO', 'O QUÊ?', 'NÃO', 'ACENTO'],
    VOCÊ: ['CLARO', 'VOCÊ É', 'OCÊ', 'CÊ É', 'PRÓXIMO', 'AHÃ', 'C É', 'CENSO', 'QUÊ?', 'VOCÊ', 'NÃO SEI', 'SENSO', 'BORA', 'REPETE'],
    'VOCÊ É': ['OCÊ', 'PRÓXIMO', 'SENSO', 'AHÃ', 'QUÊ?', 'BORA', 'NÃO SEI', 'CENSO', 'VOCÊ', 'REPETE', 'CÊ É', 'CLARO', 'C É', 'VOCÊ É'],
    OCÊ: ['NÃO SEI', 'VOCÊ É', 'AHÃ', 'OCÊ', 'PRÓXIMO', 'C É', 'CLARO', 'REPETE', 'CÊ É', 'VOCÊ', 'QUÊ?', 'CENSO', 'SENSO', 'BORA'],
    'CÊ É': ['VOCÊ', 'CÊ É', 'C É', 'PRÓXIMO', 'NÃO SEI', 'VOCÊ É', 'REPETE', 'OCÊ', 'QUÊ?', 'AHÃ', 'CLARO', 'BORA', 'SENSO', 'CENSO'],
    'C É': ['BORA', 'REPETE', 'C É', 'AHÃ', 'QUÊ?', 'CLARO', 'OCÊ', 'CENSO', 'CÊ É', 'SENSO', 'PRÓXIMO', 'NÃO SEI', 'VOCÊ É', 'VOCÊ'],
    REPETE: ['AHÃ', 'CLARO', 'PRÓXIMO', 'QUÊ?', 'CÊ É', 'C É', 'NÃO SEI', 'BORA', 'REPETE', 'VOCÊ', 'SENSO', 'CENSO', 'VOCÊ É', 'OCÊ'],
    AHÃ: ['AHÃ', 'OCÊ', 'VOCÊ É', 'VOCÊ', 'BORA', 'CENSO', 'NÃO SEI', 'PRÓXIMO', 'CLARO', 'SENSO', 'CÊ É', 'C É', 'REPETE', 'QUÊ?'],
    'NÃO SEI': ['C É', 'REPETE', 'VOCÊ É', 'CÊ É', 'PRÓXIMO', 'NÃO SEI', 'BORA', 'VOCÊ', 'AHÃ', 'SENSO', 'OCÊ', 'CLARO', 'CENSO', 'QUÊ?'],
    'QUÊ?': ['VOCÊ', 'CENSO', 'CÊ É', 'OCÊ', 'REPETE', 'BORA', 'NÃO SEI', 'SENSO', 'VOCÊ É', 'AHÃ', 'C É', 'PRÓXIMO', 'QUÊ?', 'CLARO'],
    BORA: ['CLARO', 'AHÃ', 'PRÓXIMO', 'QUÊ?', 'OCÊ', 'C É', 'CÊ É', 'CENSO', 'SENSO', 'VOCÊ', 'REPETE', 'VOCÊ É', 'NÃO SEI', 'BORA'],
    PRÓXIMO: ['QUÊ?', 'AHÃ', 'NÃO SEI', 'OCÊ', 'CENSO', 'CLARO', 'PRÓXIMO', 'SENSO', 'BORA', 'VOCÊ É', 'C É', 'CÊ É', 'REPETE', 'VOCÊ'],
    CENSO: ['VOCÊ É', 'REPETE', 'BORA', 'NÃO SEI', 'VOCÊ', 'C É', 'CLARO', 'QUÊ?', 'CÊ É', 'PRÓXIMO', 'CENSO', 'AHÃ', 'OCÊ', 'SENSO'],
    CLARO: ['VOCÊ É', 'BORA', 'SENSO', 'CÊ É', 'VOCÊ', 'CENSO', 'AHÃ', 'C É', 'CLARO', 'REPETE', 'QUÊ?', 'PRÓXIMO', 'OCÊ', 'NÃO SEI'],
    SENSO: ['CÊ É', 'PRÓXIMO', 'REPETE', 'C É', 'CENSO', 'BORA', 'NÃO SEI', 'QUÊ?', 'AHÃ', 'VOCÊ', 'SENSO', 'CLARO', 'VOCÊ É', 'OCÊ']
}

/**
 * Função que resolve o primeiro passo do módulo display
  * @param {string} text - Texto exibido no display
  * @returns {number} Posição do botão que o jogador precisa ler, considerando respectivamente botão superior esquerdo, superior direito, meio esquerdo, meio direito, inferior esquerdo e inferior direito
 * @throws {DISPLAY_TEXT_NOT_INFORMED} Texto do display não pode ser nulo
 */
const displayStep1 = (text) => {
    if (text === null)
        throw 'DISPLAY_TEXT_NOT_INFORMED'

    return buttonPosition[text]
}

/**
 * Função que resolve o segundo passo do módulo display
  * @param {string} text - Texto exibido no botão indicado pelo primeiro passo
  * @returns {...string} Lista de palavras em ordem indicando qual botão deve ser pressionado
 * @throws {BUTTON_TEXT_NOT_INFORMED} Texto do botão não pode ser nulo
 */
const displayStep2 = (text) => {
    if (text === null)
        throw 'BUTTON_TEXT_NOT_INFORMED'

    return buttonText[text]
}

module.exports = {
    displayStep1: displayStep1,
    displayStep2: displayStep2
    }