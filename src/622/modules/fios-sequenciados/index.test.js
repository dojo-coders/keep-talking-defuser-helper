const seqwires = require('./index')

describe('fios-sequenciados', () => {
    describe('primeira chamada', () => {
        it('Deveria retornar que todos os fios devem ser cortados caso a primeira aparição do fio preto esteja conectada na letra C e a primeira aparição do fio vermelho esteja conectada na letra C', () => {
            const lastStep = {}
            const currentStep = {
                "1" : ["black", "C"],
                "2" : ["red", "C"]
            }
            const resp = seqwires(lastStep, currentStep)
            expect(resp[1]).toStrictEqual([true,true])
        })
    })
    describe('segunda chamada', () => {
        it('Deveria retornar que apenas o terceiro fio deve ser cortado caso a primeira aparição do fio vemelho esteja conectada na letra A, a quarta aparição do fio preto esteja conectada na letra B e a segunda aparição do fio vemelho esteja conectada na letra B', () => {
            const lastStep = {
                "1" : ["black", "C"],
                "2" : ["black", "C"],
                "3" : ["black", "C"]
                }
            const currentStep = {
                "4" : ["red", "A"],
                "5" : ["black", "B"],
                "6" : ["red", "B"]
            }
            const resp = seqwires(lastStep, currentStep)
            expect(resp[1]).toStrictEqual([false, false, true])
        })
    })
    describe('terceira chamada', () => {
        it('Deveria retornar que apenas o segundo fio deve ser cortado caso a terceira aparição do fio preto esteja conectada na letra C e a quarta aparição do fio vermelho esteja conectada na letra C', () => {
            const lastStep = {
                "1" : ["blue", "B"],
                "2" : ["red", "A"],
                "3" : ["black", "C"],
                "4" : ["red", "A"],
                "5" : ["black", "B"],
                "6" : ["red", "B"]
            }
            const currentStep = {
                "7" : ["black", "C"],
                "8" : ["red", "C"],
            }
            const resp = seqwires(lastStep, currentStep)
            expect(resp[1]).toStrictEqual([false, true])
        })
    })
    describe('quarta chamada', () => {
        it('Deveria retornar que apenas o segundo fio deve ser cortado caso a oitava aparição do fio vemelho esteja conectada na letra C, a nona aparição do fio vemelho esteja conectada na letra B e a terceira aparição do fio preto esteja conectada na letra C', () => {
            const lastStep = {
                "1" : ["red", "A"],
                "2" : ["black", "B"],
                "3" : ["red", "B"],
                "4" : ["red", "A"],
                "5" : ["black", "B"],
                "6" : ["red", "B"],
                "7" : ["red", "A"],
                "8" : ["red", "C"],
                "9" : ["red", "C"],
            }
            const currentStep = {
                "10" : ["red", "C"],
                "11" : ["red", "B"],
                "12" : ["black", "C"],
            }
            const resp = seqwires(lastStep, currentStep)
            expect(resp[1]).toStrictEqual([false, true, false])
        })
    })
    describe('errors', () => {
        it('Deveria lançar uma exceção se o currentStep não for um objeto', () => {
            const lastStep = {}
            const currentStep = 'banana'
            expect(() => {
                seqwires(lastStep, currentStep)
            }).toThrowError('CURRENT_STEP_NOT_INFORMED')
        })
        it('Deveria lançar uma exceção se o currentStep não tiver pelo menos uma chave no objeto', () => {
            const lastStep = {}
            const currentStep = {}
            expect(() => {
                seqwires(lastStep, currentStep)
            }).toThrowError('CURRENT_STEP_NOT_INFORMED')
        })
    })
})
 