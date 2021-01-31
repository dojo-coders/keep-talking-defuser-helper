/**
   * Função que resolve o módulo Memória
   * @param {string[]} previousSteps - Array que traz as arrays das interações anteriores e suas respostas
   * @param {string[]} currentStep - Array que traz a informação da interação atual
   * @returns {string[]} Array com as arrays das interações anteriores e a atual, todas com as suas respectivas respostas
   * @throws {CURRENT_STEP_INCOMPLETED} A array com o passo atual precisa ter 5 itens.
   */


const memoria = (previousSteps, currentStep) => {
    if (currentStep.length !== 5){
        throw 'CURRENT_STEP_INCOMPLETED'
    }

    const previousStepsTemp = Array(5).fill(0).map(x => Array(6).fill(0))
    previousSteps.map((step, indexStep) => {
        step.map((data, indexData) => {
            previousStepsTemp[indexStep][indexData] = data
        })
    })

    const rules = [
        {
            1: currentStep[2], 
            2: currentStep[2], 
            3: currentStep[3], 
            4: currentStep[4]
        },
        {   
            1: 4, 
            2: currentStep[previousStepsTemp[0].indexOf(previousStepsTemp[0][5],1)], 
            3: currentStep[1], 
            4: currentStep[previousStepsTemp[0].indexOf(previousStepsTemp[0][5],1)]
        },
        {
            1: previousStepsTemp[1][5], 
            2: previousStepsTemp[0][5], 
            3: currentStep[3], 
            4: 4
        },
        {
            1: currentStep[previousStepsTemp[0].indexOf(previousStepsTemp[0][5],1)], 
            2: currentStep[1], 
            3: currentStep[previousStepsTemp[1].indexOf(previousStepsTemp[1][5],1)], 
            4: currentStep[previousStepsTemp[1].indexOf(previousStepsTemp[1][5],1)]
        },
        {
            1: previousStepsTemp[0][5], 
            2: previousStepsTemp[1][5], 
            3: previousStepsTemp[3][5], 
            4: previousStepsTemp[2][5]
        },
    ]

    const answer = rules[previousSteps.length][currentStep[0]]

    currentStep.push(answer)
    previousSteps.push(currentStep)
    return previousSteps
}
  
module.exports = memoria