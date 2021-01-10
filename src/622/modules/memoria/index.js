/**
   * Função que resolve o módulo Memória
   * @param {string[]} previousStep - Array que traz as arrays das interações anteriores e suas respostas
   * @param {string[]} currentStep - Array que traz a informação da interação atual
   * @returns {string[]} Array com as arrays das interações anteriores e a atual, todas com as suas respectivas respostas
   */


const memoria = (previousStep, currentStep) => {
    let answer
    switch(previousStep.length) {
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
                case 2: answer = previousStep[0][5]; break;
                case 3: answer = currentStep[1]; break;
                case 4: answer = previousStep[0][5]; break;
            }
            break
        case 2:
            switch(currentStep[0]){
                case 1: answer = previousStep[1][5]; break;
                case 2: answer = previousStep[0][5]; break;
                case 3: answer = currentStep[3]; break;
                case 4: answer = 4; break;
            }
            break
        case 3:
            switch(currentStep[0]){
                case 1: answer = previousStep[0][5]; break;
                case 2: answer = currentStep[1]; break;
                case 3: answer = previousStep[1][5]; break;
                case 4: answer = previousStep[1][5]; break;
            }
            break
        case 4:
            switch(currentStep[0]){
                case 1: answer = previousStep[0][5]; break;
                case 2: answer = previousStep[1][5]; break;
                case 3: answer = previousStep[3][5]; break;
                case 4: answer = previousStep[2][5]; break;
            }
            break
    }
    currentStep.push(answer)
    previousStep.push(currentStep)
    return previousStep
  }
  
  module.exports = memoria