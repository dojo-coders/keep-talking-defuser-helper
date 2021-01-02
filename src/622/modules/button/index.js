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
 * @param {color} color - Cor do botão
 * @param {string} text - Texto do botão
 * @returns {string} Frase informando qual a próxima ação que o jogador deve fazer
 */
const button = (config, color, text) => {
    if(color === 'blue' && text === 'Abortar')
        return msg.hold
    
    else if(config['batteries'] > 1 && text === 'Detonar')
        return msg.click
    
    else if(config['ind-car'] && color === 'white')
        return msg.hold
    
    else if(config['batteries'] > 2 && config['ind-frk'])
        return msg.click
    
    else if(color === 'yellow')
        return msg.hold
    
    else if(color === 'red' && text === 'Segure')
        return msg.click
    
    else
        return msg.hold
}

/**
 * Função para quando for necessário segurar o botão pressionado
 * @param {color} color - Cor da faixa à direita do botão
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