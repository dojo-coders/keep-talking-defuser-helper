const seqwires = require('./index')

describe('fios-sequenciados', () => {
  describe('primeira chamada', () => {

    const lastStep = {}
    const currentStep0 = {
        "1" : [null, null, null],
        "2" : ["black", "C", null],
        "3" : ["red", "C", null]
    }
    
    it('Deve retornar true e true', () => {
        const resp = seqwires(lastStep, currentStep0)
        expect(resp).toStrictEqual([null, true,true])
    })

    const currentStep1 = {
        "1" : ["blue", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "B", null]
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep, currentStep1)
        expect(resp).toStrictEqual([false, true, true])
    })

    const currentStep2 = {
        "1" : ["black", "C", null],
        "2" : ["black", "C", null],
        "3" : ["black", "C", null]
    }
    
    it('Deve retornar true, true, false', () => {
        const resp = seqwires(lastStep, currentStep2)
        expect(resp).toStrictEqual([true, true, false])
    })

    const currentStep3 = {
        "1" : ["red", "A", null],
        "2" : ["black", "B", null],
        "3" : ["red", "B", null]
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep, currentStep3)
        expect(resp).toStrictEqual([false, true, true])
    })

    const currentStep4 = {
        "1" : ["red", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "C", null]
    }
    
    it('Deve retornar false, false, false', () => {
        const resp = seqwires(lastStep, currentStep4)
        expect(resp).toStrictEqual([false, false, false])
    })

    const currentStep5 = {
        "1" : ["blue", "B", null],
        "2" : ["red", "A", null],
        "3" : ["black", "C", null]
    }
    
    it('Deve retornar true, false, true', () => {
        const resp = seqwires(lastStep, currentStep5)
        expect(resp).toStrictEqual([true, false, true])
    })

  })
  describe('segunda chamada', () => {

    const lastStep0 = {
        "1" : [null, null, null],
        "2" : ["black", "C", null],
        "3" : ["red", "C", null]
    }
    const currentStep0 = {
        "4" : ["black", "C", null],
        "5" : ["black", "C", null],
        "6" : ["black", "C", null]
    }
    
    it('Deve retornar true, false, true', () => {
        const resp = seqwires(lastStep0, currentStep0)
        expect(resp).toStrictEqual([true, false, true])
    })

    const lastStep1 = {
        "1" : ["blue", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "B", null]
        }

    const currentStep1 = {
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "A", null]
    }
    
    it('Deve retornar true, false, true', () => {
        const resp = seqwires(lastStep1, currentStep1)
        expect(resp).toStrictEqual([true, false, true])
    })

    const lastStep2 = {
        "1" : ["black", "C", null],
        "2" : ["black", "C", null],
        "3" : ["black", "C", null]
        }
    const currentStep2 = {
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
    }
    
    it('Deve retornar false, false, true', () => {
        const resp = seqwires(lastStep2, currentStep2)
        expect(resp).toStrictEqual([false, false, true])
    })

    const lastStep3 = {
        "1" : ["red", "A", null],
        "2" : ["black", "B", null],
        "3" : ["red", "B", null]
        }
    const currentStep3 = {
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
    }
    
    it('Deve retornar true, false, false', () => {
        const resp = seqwires(lastStep3, currentStep3)
        expect(resp).toStrictEqual([true, false, false])
    })

    const lastStep4 = {
        "1" : ["red", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "C", null]
        }
    const currentStep4 = {
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "B", null]
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep4, currentStep4)
        expect(resp).toStrictEqual([false, true, true])
    })

    const lastStep5 = {
        "1" : ["blue", "B", null],
        "2" : ["red", "A", null],
        "3" : ["black", "C", null]
        }
    const currentStep5 = {
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
    }
    
    it('Deve retornar false, false, false', () => {
        const resp = seqwires(lastStep5, currentStep5)
        expect(resp).toStrictEqual([false, false, false])
    })

  })
  describe('terceira chamada', () => {
    
    const lastStep0 = {
        "1" : [null, null, null],
        "2" : ["black", "C", null],
        "3" : ["red", "C", null],
        "4" : ["black", "C", null],
        "5" : ["black", "C", null],
        "6" : ["black", "C", null]
    }
    const currentStep0 = {
        "7" : ["black", "A", null],
        "8" : [null, null, null],
        "9" : [null, null, null],
    }
    
    it('Deve retornar false, null, null', () => {
        const resp = seqwires(lastStep0, currentStep0)
        expect(resp).toStrictEqual([false, null, null])
    })

    const lastStep1 = {
        "1" : ["blue", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "B", null],
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "A", null]
        }

    const currentStep1 = {
        "7" : [null, null, null],
        "8" : ["black", "C", null],
        "9" : ["black", "C", null],
    }
    
    it('Deve retornar null, true, true', () => {
        const resp = seqwires(lastStep1, currentStep1)
        expect(resp).toStrictEqual([null, true, true])
    })

    const lastStep2 = {
        "1" : ["black", "C", null],
        "2" : ["black", "C", null],
        "3" : ["black", "C", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
        }
    const currentStep2 = {
        "7" : ["red", "A", null],
        "8" : [null, null, null],
        "9" : ["red", "B", null],
    }
    
    it('Deve retornar true, null, false', () => {
        const resp = seqwires(lastStep2, currentStep2)
        expect(resp).toStrictEqual([true, null, false])
    })

    const lastStep3 = {
        "1" : ["red", "A", null],
        "2" : ["black", "B", null],
        "3" : ["red", "B", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
        }
    const currentStep3 = {
        "7" : ["red", "A", null],
        "8" : ["red", "C", null],
        "9" : ["red", "C", null],
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep3, currentStep3)
        expect(resp).toStrictEqual([false, true, true])
    })

    const lastStep4 = {
        "1" : ["red", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "C", null],
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "B", null]
        }
    const currentStep4 = {
        "7" : ["blue", "B", null],
        "8" : ["red", "A", null],
        "9" : ["black", "C", null],
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep4, currentStep4)
        expect(resp).toStrictEqual([false, true, true])
    })

    const lastStep5 = {
        "1" : ["blue", "B", null],
        "2" : ["red", "A", null],
        "3" : ["black", "C", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null]
        }
    const currentStep5 = {
        "7" : [null, null, null],
        "8" : ["black", "C", null],
        "9" : ["red", "C", null],
    }
    
    it('Deve retornar null, false, true', () => {
        const resp = seqwires(lastStep5, currentStep5)
        expect(resp).toStrictEqual([null, false, true])
    })

  })
  describe('terceira chamada', () => {

    const lastStep0 = {
        "1" : [null, null, null],
        "2" : ["black", "C", null],
        "3" : ["red", "C", null],
        "4" : ["black", "C", null],
        "5" : ["black", "C", null],
        "6" : ["black", "C", null],
        "7" : ["black", "A", null],
        "8" : [null, null, null],
        "9" : [null, null, null],
    }
    const currentStep0 = {
        "10" : ["blue", "B", null],
        "11" : ["red", "A", null],
        "12" : ["black", "C", null],
    }
    
    it('Deve retornar true, false, true', () => {
        const resp = seqwires(lastStep0, currentStep0)
        expect(resp).toStrictEqual([true, false, true])
    })

    const lastStep1 = {
        "1" : ["blue", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "B", null],
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "A", null],
        "7" : [null, null, null],
        "8" : ["black", "C", null],
        "9" : ["black", "C", null],
        }

    const currentStep1 = {
        "10" : [null, null, null],
        "11" : ["black", "C", null],
        "12" : ["red", "C", null],
    }
    
    it('Deve retornar null, false, false', () => {
        const resp = seqwires(lastStep1, currentStep1)
        expect(resp).toStrictEqual([null, false, false])
    })

    const lastStep2 = {
        "1" : ["black", "C", null],
        "2" : ["black", "C", null],
        "3" : ["black", "C", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null],
        "7" : ["red", "A", null],
        "8" : [null, null, null],
        "9" : ["red", "B", null],
        }
    const currentStep2 = {
        "10" : ["blue", "A", null],
        "11" : ["red", "C", null],
        "12" : ["red", "B", null],
    }
    
    it('Deve retornar false, false, false', () => {
        const resp = seqwires(lastStep2, currentStep2)
        expect(resp).toStrictEqual([false, false, false])
    })

    const lastStep3 = {
        "1" : ["red", "A", null],
        "2" : ["black", "B", null],
        "3" : ["red", "B", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null],
        "7" : ["red", "A", null],
        "8" : ["red", "C", null],
        "9" : ["red", "C", null],
        }
    const currentStep3 = {
        "10" : ["black", "C", null],
        "11" : ["black", "C", null],
        "12" : ["black", "C", null],
    }
    
    it('Deve retornar false, true, false', () => {
        const resp = seqwires(lastStep3, currentStep3)
        expect(resp).toStrictEqual([false, true, false])
    })

    const lastStep4 = {
        "1" : ["red", "A", null],
        "2" : ["red", "C", null],
        "3" : ["red", "C", null],
        "4" : ["blue", "A", null],
        "5" : ["red", "C", null],
        "6" : ["red", "B", null],
        "7" : ["blue", "B", null],
        "8" : ["red", "A", null],
        "9" : ["black", "C", null],
        }
    const currentStep4 = {
        "10" : ["red", "A", null],
        "11" : ["black", "B", null],
        "12" : ["red", "B", null],
    }
    
    
    it('Deve retornar true, false, true', () => {
        const resp = seqwires(lastStep4, currentStep4)
        expect(resp).toStrictEqual([true, false, true])
    })

    const lastStep5 = {
        "1" : ["blue", "B", null],
        "2" : ["red", "A", null],
        "3" : ["black", "C", null],
        "4" : ["red", "A", null],
        "5" : ["black", "B", null],
        "6" : ["red", "B", null],
        "7" : [null, null, null],
        "8" : ["black", "C", null],
        "9" : ["red", "C", null],
        }
    const currentStep5 = {
        "10" : ["red", "A", null],
        "11" : ["red", "C", null],
        "12" : ["red", "C", null],
    }
    
    it('Deve retornar false, true, true', () => {
        const resp = seqwires(lastStep5, currentStep5)
        expect(resp).toStrictEqual([false, true, true])
    })
  })
})
 