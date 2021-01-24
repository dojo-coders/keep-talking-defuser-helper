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
    let answer
    switch(previousSteps.length) {
        case 0:
            switch(currentStep[0]){
                case 1: answer = currentStep[2]; break;
                case 2: answer = currentStep[2]; break;
                case 3: answer = currentStep[3]; break;
                case 4: answer = currentStep[4]; break;
                }
            break;
      case 1:
            switch(currentStep[0]){ 
                case 1: answer = 4; break;
                case 2: answer = currentStep[previousSteps[0].indexOf(previousSteps[0][5],1)]; break;
                case 3: answer = currentStep[1]; break;
                case 4: answer = currentStep[previousSteps[0].indexOf(previousSteps[0][5],1)]; break;
            }
            break
        case 2:
            switch(currentStep[0]){
                case 1: answer = previousSteps[1][5]; break;
                case 2: answer = previousSteps[0][5]; break;
                case 3: answer = currentStep[3]; break;
                case 4: answer = 4; break;
            }
            break
        case 3:
            switch(currentStep[0]){
                case 1: answer = currentStep[previousSteps[0].indexOf(previousSteps[0][5],1)]; break;
                case 2: answer = currentStep[1]; break;
                case 3: answer = currentStep[previousSteps[1].indexOf(previousSteps[1][5],1)]; break;
                case 4: answer = currentStep[previousSteps[1].indexOf(previousSteps[1][5],1)]; break;
            }
            break
        case 4:
            switch(currentStep[0]){
                case 1: answer = previousSteps[0][5]; break;
                case 2: answer = previousSteps[1][5]; break;
                case 3: answer = previousSteps[3][5]; break;
                case 4: answer = previousSteps[2][5]; break;
            }
            break
    }
    currentStep.push(answer)
    previousSteps.push(currentStep)
    return previousSteps
}
  
module.exports = memoria