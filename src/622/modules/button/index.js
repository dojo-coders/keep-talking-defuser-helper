const msg = {
            hold: 'HOLD',
            click: 'CLICK'
            }

const release = {
                blue: 4,
                yellow: 5,
                anyOther: 1
                }

/**
 * Função que resolve o módulo botão
 * @param {Object} config - Objeto de configuração da bomba
 * @param {boolean|null} config.ind-car - Indica se existe um indicador CAR
 * @param {boolean|null} config.ind-frk - Indica se existe um indicador FRK
 * @param {string} color - Cor do botão
 * @param {string} text - Texto do botão
 * @returns {string} Palavra informando se o jogador deve clicar ou segurar o botão
 * @throws {CONFIG:BATTERIES_NOT_INFORMED} config.batteries nem sempre pode ser nulo
 * @throws {CONFIG:IND-CAR_NOT_INFORMED} config.ind-car nem sempre pode ser nulo
 * @throws {CONFIG:IND-FRK_NOT_INFORMED} config.ind-frk nem sempre pode ser nulo
 */
const button = (config, color, text) => {
    if(color === 'blue' && text === 'Abortar')
        return msg.hold
    
    if (config['batteries'] === null)
        throw 'CONFIG:BATTERIES_NOT_INFORMED'

    if(config['batteries'] > 1 && text === 'Detonar')
        return msg.click
    
    if (config['ind-car'] === null)
        throw 'CONFIG:IND-CAR_NOT_INFORMED'

    if(config['ind-car'] && color === 'white')
        return msg.hold
    
    if (config['ind-frk'] === null)
        throw 'CONFIG:IND-FRK_NOT_INFORMED'
    
    if(config['batteries'] > 2 && config['ind-frk'])
        return msg.click
    
    if(color === 'yellow')
        return msg.hold
    
    if(color === 'red' && text === 'Segure')
        return msg.click
    
    return msg.hold
}

/**
 * Função para quando for necessário segurar o botão pressionado
 * @param {string} color - Cor da faixa à direita do botão
 * @returns {number} Valor do marcador de tempo em que o jogador deve soltar o botão
 */
const buttonRelease = (color) => {
    if(color !== 'blue' && color !== 'yellow')
        color = 'anyOther'
    
    return release[color]
}

module.exports = {
                button: button,
                buttonRelease: buttonRelease
                }