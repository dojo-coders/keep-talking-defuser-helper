const morse = require('.')

describe('morse module', () => {
  it('Deve retornar a frequência 3.505', () => {
    const freq = morse('.--.----...-..') // podre
    expect(freq).toBe(3.505)
  })

  it('Deve retornar a frequência 3.515', () => {
    const freq = morse('..-..-..-....') // frase
    expect(freq).toBe(3.515)
  })

  it('Deve retornar a frequência 3.522', () => {
    const freq = morse('..--...-..---') // unido
    expect(freq).toBe(3.522)
  })

  it('Deve retornar a frequência 3.532', () => {
    const freq = morse('---.--...-..-') // opera
    expect(freq).toBe(3.532)
  })
  
  it('Deve retornar a frequência 3.535', () => {
    const freq = morse('-.-...-..-..-') // trufa
    expect(freq).toBe(3.535)
  })
  
  it('Deve retornar a frequência 3.542', () => {
    const freq = morse('--.....----') // misto
    expect(freq).toBe(3.542)
  })
  
  it('Deve retornar a frequência 3.545', () => {
    const freq = morse('.--..-.-..-.-.') // parar
    expect(freq).toBe(3.545)
  })
  
  it('Deve retornar a frequência 3.552', () => {
    const freq = morse('.-...------') // ritmo
    expect(freq).toBe(3.552)
  })
  
  it('Deve retornar a frequência 3.555', () => {
    const freq = morse('--..--.-..---') // mundo
    expect(freq).toBe(3.555)
  })
  
  it('Deve retornar a frequência 3.565', () => {
    const freq = morse('....-..--..---') // senado
    expect(freq).toBe(3.565)
  })
  
  it('Deve retornar a frequência 3.572', () => {
    const freq = morse('.....-.-...-..') // surfe
    expect(freq).toBe(3.572)
  })
  
  it('Deve retornar a frequência 3.575', () => {
    const freq = morse('-..--....') // times
    expect(freq).toBe(3.575)
  })
  
  it('Deve retornar a frequência 3.582', () => {
    const freq = morse('-----.-...-') // moeda
    expect(freq).toBe(3.582)
  })
  
  it('Deve retornar a frequência 3.592', () => {
    const freq = morse('--.-.-..----.') // malote
    expect(freq).toBe(3.592)
  })
  
  it('Deve retornar a frequência 3.595', () => {
    const freq = morse('.--.....-.-..-') // pesca
    expect(freq).toBe(3.595)
  })
  
  it('Deve retornar a frequência 3.600', () => {
    const freq = morse('.--...--....--') // pudim
    expect(freq).toBe(3.600)
  })
})

