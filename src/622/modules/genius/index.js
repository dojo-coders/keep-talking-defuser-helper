const rules = {
  vowel: {
    err0: { blue: 'red', green: 'yellow', red: 'blue', yellow: 'green', },
    err1: { blue: 'green', green: 'blue', red: 'yellow', yellow: 'red', },
    err2: { blue: 'red', green: 'yellow', red: 'green', yellow: 'blue', },
  },
  "not-vowel": {
    err0: { blue: 'yellow', green: 'green', red: 'blue', yellow: 'red', },
    err1: { blue: 'blue', green: 'yellow', red: 'red', yellow: 'green', },
    err2: { blue: 'green', green: 'blue', red: 'yellow', yellow: 'red', },
  }
}

/**
 * Função que resolve o módulo genius
 * @param {Object} config - Objeto de configuração da bomba
 * @param {boolean|null} config.serial-vowel - Indica se existe uma vogal no número de série
 * @param {number} config.errors - Quantidade de erros na bomba
 * @param {...string} colors - Lista das cores na ordem que acendem
 * @returns {string[]} Lista de cores a serem pressionadas em ordem
 * @throws {CONFIG:SERIAL_VOWEL_NOT_INFORMED} config.serial-vowel não pode ser nulo
 * @throws {CONFIG:ERRORS_NOT_INFORMED} config.errors não pode ser nulo
 */
const genius = (config, ...colors) => {
  if (config['errors'] === null) {
    throw 'CONFIG:ERRORS_NOT_INFORMED'
  }

  if (config['serial-vowel'] === null) {
    throw 'CONFIG:SERIAL_VOWEL_NOT_INFORMED'
  }

  const mapColors = rules
    [ config['serial-vowel'] ? 'vowel' : 'not-vowel' ]
    [ 'err' + config.errors ]

  return colors.map(color => mapColors[color])
}

module.exports = genius
