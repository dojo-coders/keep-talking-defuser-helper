const msg = {
            hold: 'Mantenha o botão pressionado.',
            click: 'Pressione e solte o botão.'
            }

const releaseMsg = {
                    blue: 'Solte quando o marcador de tempo tiver um 4 em qualquer posição.',
                    yellow: 'Solte quando o marcador de tempo tiver um 5 em qualquer posição.',
                    anyOther: 'Solte quando o marcador de tempo tiver um 1 em qualquer posição.'
                    }

/**
 * Função que resolve o módulo botão
 * @param {Object} config - Objeto de configuração da bomba
 * @param {boolean|null} config.ind-car - Indica se existe um indicador CAR
 * @param {boolean|null} config.ind-frk - Indica se existe um indicador FRK
 * @param {string} color - Cor do botão
 * @param {string} text - Texto do botão
 * @returns {string} Frase informando qual a próxima ação que o jogador deve fazer
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
 * @returns {string} Frase informando qual a próxima ação que o jogador deve fazer
 */
const buttonRelease = (color) => {
    if(color === 'blue' || color === 'yellow')
        return releaseMsg[color]
    
    else
        return releaseMsg.anyOther
}

module.exports = {
                button: button,
                buttonRelease: buttonRelease
                }