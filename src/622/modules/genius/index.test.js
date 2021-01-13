const genius = require('./index')

describe('genius', () => {
  describe('número de série contém vogal', () => {
    describe('0 erros', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": true,
          "errors": 0
        }
      })
    
      it('Deve retornar azul quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })

      it('Deve retornar vermelho quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })

      it('Deve retornar amarelo quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar verde quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })
    })

    describe('1 erro', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": true,
          "errors": 1
        }
      })
    
      it('Deve retornar amarelo quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar verde quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })

      it('Deve retornar azul quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })

      it('Deve retornar vermelho quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })
    })

    describe('2 erros', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": true,
          "errors": 2
        }
      })
    
      it('Deve retornar verde quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })

      it('Deve retornar vermelho quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })

      it('Deve retornar amarelo quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar azul quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })
    })
  })

  describe('número de série não contém vogal', () => {
    describe('0 erros', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": false,
          "errors": 0
        }
      })
    
      it('Deve retornar azul quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })

      it('Deve retornar amarelo quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar verde quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })

      it('Deve retornar vermelho quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })
    })

    describe('1 erro', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": false,
          "errors": 1
        }
      })
    
      it('Deve retornar vermelho quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })

      it('Deve retornar azul quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })

      it('Deve retornar amarelo quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar verde quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })
    })

    describe('2 erros', () => {
      let config = null

      beforeEach(() => {
        config = {
          "serial-vowel": false,
          "errors": 2
        }
      })
    
      it('Deve retornar amarelo quando receber vermelho', () => {
        const resp = genius(config, 'red')
        expect(resp).toEqual(expect.arrayContaining(['yellow']))
      })

      it('Deve retornar verde quando receber azul', () => {
        const resp = genius(config, 'blue')
        expect(resp).toEqual(expect.arrayContaining(['green']))
      })

      it('Deve retornar azul quando receber verde', () => {
        const resp = genius(config, 'green')
        expect(resp).toEqual(expect.arrayContaining(['blue']))
      })

      it('Deve retornar vermelho quando receber amarelo', () => {
        const resp = genius(config, 'yellow')
        expect(resp).toEqual(expect.arrayContaining(['red']))
      })
    })
  })
  
  describe('errors', () => {
    it('Deve lançar uma exceção quando não tiver a informação sobre a vogal no número de série', () => {
      const config = {
        "serial-vowel": null,
        "errors": 0
      }

      expect(() => {
        genius(config, 'red')
      }).toThrowError('CONFIG:SERIAL_VOWEL_NOT_INFORMED')
    })
  })
})
