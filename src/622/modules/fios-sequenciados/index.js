// Quais aparicoes devem ser cortadas
const rules = {
    "red": {
        1: ["C"], 2: ["B"], 3: ["A"],
        4: ["A", "C"], 5: ["B"], 6: ["A", "C"],
        7: ["A", "B", "C"], 8: ["A", "B"], 9: ["B"],
    },
    "blue": {
        1: ["B"], 2: ["A","C"], 3: ["B"],
        4: ["A"], 5: ["B"], 6: ["B", "C"],
        7: ["C"], 8: ["A", "C"], 9: ["A"],
    },
    "black": {
        1: ["A", "B", "C"], 2: ["A","C"], 3: ["B"],
        4: ["A", "C"], 5: ["B"], 6: ["B", "C"],
        7: ["A", "B"], 8: ["C"], 9: ["C"],
    }
}

/**
   * Função que resolve o módulo fios sequenciados
   * @param {Object} lastStep - Objeto que trás a informação das interações anteriores
   * @param {string} lastStep.keys - As chaves do objeto lastStep são os números de cada ocorrência, o valor dentro de cada chave é uma array com as informações da ocorrência
   * @param {string[]} lastStep.stepNumber - A array dentro de cada chave do Objeto lastStep é composta por cor do fio, letra que o fio está ligado e foi cortado ou não
   * @param {Object} currentStep - Objeto que trás a informação da interação atual
   * @param {string} currentStep.keys - As chaves do objeto currentStep são os números de cada ocorrência, o valor dentro de cada chave é uma array com as informações da ocorrência
   * @param {string[]} currentStep.stepNumber - A array dentro de cada chave do Objeto currentStep é composta por cor do fio, letra que o fio está ligado e foi cortado ou não
   * @returns {string[]} Array contendo um elemento com o histórico das interações anteriores e outro elemento array com um ou mais elementos indicando se o fio deve ser cortado ou não
   * @throws {CURRENT_STEP_NOT_INFORMED} Os dados da etapa atual precisam ser devidamente informados
   */
   
const seqwires = (lastStep, currentStep) => {
    if (typeof currentStep !== 'object' || Object.keys(currentStep).length === 0){
        throw 'CURRENT_STEP_NOT_INFORMED'
    }
    const newLastStep = {...lastStep, ...currentStep}
    
    // carrega aparicoes e carimba se e para cortar
    const colors = {"red" : [], "blue" : [], "black" : []}
    const loadOccurrences = Object.keys(newLastStep).forEach( (key) => {
        Object.keys(colors).forEach( (color) => {
            if (newLastStep[key][0] === color){
                colors[color].push(color)
                newLastStep[key][2] = rules[color][colors[color].length.toString()].indexOf(newLastStep[key][1]) === -1 ? false : true
            }
        })
    })

    const answer = [newLastStep,[]]
    const makeAnswer = Object.keys(currentStep).forEach( (key) => {
        answer[1].push(newLastStep[key][2])
    })
    return answer
}
  
module.exports = seqwires 