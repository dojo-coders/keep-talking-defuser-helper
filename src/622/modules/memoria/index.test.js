const memoria = require('./index')

describe('memoria', () => {
    describe('passo 1', () => {
      it('Deveria retornar 3 se o número no visor do primeiro passo é 1 e o botão na segunda posição é 3', () => {
          previousSteps = []
          currentStep = [1, 1, 3, 4, 2]
          expectAnswerStep = [[1, 1, 3, 4, 2, 3]]
          const resp = memoria(previousSteps, currentStep)
          expect(resp).toStrictEqual(expectAnswerStep)
        })
    })

    describe('passo 2', () => {
      it('Deveria retornar 1 se o número no visor do segundo passo é 4, a posição pressionada no passo 1 foi a terceira posição e o número que está na terceira posição do estágio atual é 1', () => {
        previousSteps = [[3, 4, 1, 3, 2, 3]]
        currentStep = [4, 3, 4, 1, 2]
        expectAnswerStep = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 1]]
        const resp = memoria(previousSteps, currentStep)
        expect(resp).toStrictEqual(expectAnswerStep)
      })
    })

    describe('passo 3', () => {
      it('Deveria retornar 4 se o número no visor do terceiro passo é 1, o número do botão pressionado no segundo passo foi 4', () => {
        previousSteps = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4]]
        currentStep = [1, 3, 4, 1, 2]
        expectAnswerStep = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [1, 3, 4, 1, 2, 4]]
        const resp = memoria(previousSteps, currentStep)
        expect(resp).toStrictEqual(expectAnswerStep)
      })
    })

    describe('passo 4', () => {
      it('Deveria retornar 1 se o número no visor do quarto passo é 3, a posição pressionada no passo 2 foi a primeira posição e o número que está na primeira posição do estágio atual é 1', () => {
        previousSteps = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3]]
        currentStep = [3, 1, 3, 4, 2]
        expectAnswerStep = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3], [3, 1, 3, 4, 2, 1]]
        const resp = memoria(previousSteps, currentStep)
        expect(resp).toStrictEqual(expectAnswerStep)
      })
    })

    describe('passo 5', () => {
      it('Deveria retornar 3 se o número no visor do quinto passo é 3, o número do botão pressionado no quarto passo foi 3', () => {
        previousSteps = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3], [4, 3, 4, 1, 2, 3]]
        currentStep = [3, 1, 3, 4, 2]
        expectAnswerStep = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3], [4, 3, 4, 1, 2, 3], [3, 1, 3, 4, 2, 3]]
        const resp = memoria(previousSteps, currentStep)
        expect(resp).toStrictEqual(expectAnswerStep)
      })
    })
    describe('error', () => {
      it('Deveria lançar uma exceção quando o passo atual não estiver completo (número no visor mais os quatro números nos botões', () => {
        previousSteps = []
        currentStep = [1, 1, 3, 2]
        expect(() => {
          memoria(previousSteps, currentStep)
        }).toThrowError('CURRENT_STEP_INCOMPLETED')
      })
    })
})
