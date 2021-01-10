const memoria = require('./index')

describe('memoria', () => {
    describe('passo 1', () => {
        let answer 

        previousStep0 = []
        currentStep0 = [1, 1, 3, 4, 2]
        expectAnswerStep0 = [[1, 1, 3, 4, 2, 3]]
        it('deveria retornar 3', () => {
            const resp = memoria(previousStep0, currentStep0)
            expect(resp).toStrictEqual(expectAnswerStep0)
        })

        previousStep1 = []
        currentStep1 = [2, 3, 4, 1, 2]
        expectAnswerStep1 = [[2, 3, 4, 1, 2, 4]]
        it('deveria retornar 4', () => {
          const resp = memoria(previousStep1, currentStep1)
          expect(resp).toStrictEqual(expectAnswerStep1)
        })

        previousStep2 = []
        currentStep2 = [3, 4, 1, 3, 2]
        expectAnswerStep2 = [[3, 4, 1, 3, 2, 3]]
        it('deveria retornar 3', () => {
          const resp = memoria(previousStep2, currentStep2)
          expect(resp).toStrictEqual(expectAnswerStep2)
        })

        previousStep3 = []
        currentStep3 = [4, 3, 4, 1, 2]
        expectAnswerStep3 = [[4, 3, 4, 1, 2, 2]]
        it('deveria retornar 2', () => {
          const resp = memoria(previousStep3, currentStep3)
          expect(resp).toStrictEqual(expectAnswerStep3)
        })
    })

    describe('passo 2', () => {
      let answer 

      previousStep4 = [[1, 1, 3, 4, 2, 3]]
      currentStep4 = [2, 3, 4, 1, 2]
      expectAnswerStep4 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3]]
      it('deveria retornar 3', () => {
          const resp = memoria(previousStep4, currentStep4)
          expect(resp).toStrictEqual(expectAnswerStep4)
      })

      previousStep5 = [[2, 3, 4, 1, 2, 4]]
      currentStep5 = [3, 4, 1, 3, 2]
      expectAnswerStep5 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep5, currentStep5)
        expect(resp).toStrictEqual(expectAnswerStep5)
      })

      previousStep6 = [[3, 4, 1, 3, 2, 3]]
      currentStep6 = [4, 3, 4, 1, 2]
      expectAnswerStep6 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3]]
      it('deveria retornar 3', () => {
        const resp = memoria(previousStep6, currentStep6)
        expect(resp).toStrictEqual(expectAnswerStep6)
      })

      previousStep7 = [[4, 3, 4, 1, 2, 2]]
      currentStep7 = [1, 1, 3, 4, 2]
      expectAnswerStep7 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep7, currentStep7)
        expect(resp).toStrictEqual(expectAnswerStep7)
      })
    })

    describe('passo 3', () => {
      let answer 

      previousStep8 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3]]
      currentStep8 = [3, 4, 1, 3, 2]
      expectAnswerStep8 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3]]
      it('deveria retornar 3', () => {
          const resp = memoria(previousStep8, currentStep8)
          expect(resp).toStrictEqual(expectAnswerStep8)
      })

      previousStep9 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4]]
      currentStep9 = [4, 3, 4, 1, 2]
      expectAnswerStep9 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep9, currentStep9)
        expect(resp).toStrictEqual(expectAnswerStep9)
      })

      previousStep10 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3]]
      currentStep10 = [1, 1, 3, 4, 2]
      expectAnswerStep10 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3]]
      it('deveria retornar 3', () => {
        const resp = memoria(previousStep10, currentStep10)
        expect(resp).toStrictEqual(expectAnswerStep10)
      })

      previousStep11 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4]]
      currentStep11 = [2, 3, 4, 1, 2]
      expectAnswerStep11 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 2]]
      it('deveria retornar 2', () => {
        const resp = memoria(previousStep11, currentStep11)
        expect(resp).toStrictEqual(expectAnswerStep11)
      })
    })

    describe('passo 4', () => {
      let answer 

      previousStep12 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3]]
      currentStep12 = [4, 3, 4, 1, 2]
      expectAnswerStep12 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3], [4, 3, 4, 1, 2, 3]]
      it('deveria retornar 3', () => {
          const resp = memoria(previousStep12, currentStep12)
          expect(resp).toStrictEqual(expectAnswerStep12)
      })

      previousStep13 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 4]]
      currentStep13 = [1, 1, 3, 4, 2]
      expectAnswerStep13 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 4], [1, 1, 3, 4, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep13, currentStep13)
        expect(resp).toStrictEqual(expectAnswerStep13)
      })

      previousStep14 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3]]
      currentStep14 = [2, 3, 4, 1, 2]
      expectAnswerStep14 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3], [2, 3, 4, 1, 2, 3]]
      it('deveria retornar 3', () => {
        const resp = memoria(previousStep14, currentStep14)
        expect(resp).toStrictEqual(expectAnswerStep14)
      })

      previousStep15 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 2]]
      currentStep15 = [3, 4, 1, 3, 2]
      expectAnswerStep15 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 2], [3, 4, 1, 3, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep15, currentStep15)
        expect(resp).toStrictEqual(expectAnswerStep15)
      })
    })

    describe('passo 5', () => {
      let answer 

      previousStep16 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3], [4, 3, 4, 1, 2, 3]]
      currentStep16 = [1, 1, 3, 4, 2]
      expectAnswerStep16 = [[1, 1, 3, 4, 2, 3],[2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3], [4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3]]
      it('deveria retornar 3', () => {
          const resp = memoria(previousStep16, currentStep16)
          expect(resp).toStrictEqual(expectAnswerStep16)
      })

      previousStep17 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 4], [1, 1, 3, 4, 2, 4]]
      currentStep17 = [2, 3, 4, 1, 2]
      expectAnswerStep17 = [[2, 3, 4, 1, 2, 4],[3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 4], [1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 4]]
      it('deveria retornar 4', () => {
        const resp = memoria(previousStep17, currentStep17)
        expect(resp).toStrictEqual(expectAnswerStep17)
      })

      previousStep18 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3], [2, 3, 4, 1, 2, 3]]
      currentStep18 = [3, 4, 1, 3, 2]
      expectAnswerStep18 = [[3, 4, 1, 3, 2, 3],[4, 3, 4, 1, 2, 3], [1, 1, 3, 4, 2, 3], [2, 3, 4, 1, 2, 3], [3, 4, 1, 3, 2, 3]]
      it('deveria retornar 3', () => {
        const resp = memoria(previousStep18, currentStep18)
        expect(resp).toStrictEqual(expectAnswerStep18)
      })

      previousStep19 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 2], [3, 4, 1, 3, 2, 4]]
      currentStep19 = [4, 3, 4, 1, 2]
      expectAnswerStep19 = [[4, 3, 4, 1, 2, 2],[1, 1, 3, 4, 2, 4], [2, 3, 4, 1, 2, 2], [3, 4, 1, 3, 2, 4], [4, 3, 4, 1, 2, 2]]
      it('deveria retornar 2', () => {
        const resp = memoria(previousStep19, currentStep19)
        expect(resp).toStrictEqual(expectAnswerStep19)
      })
    })
})
