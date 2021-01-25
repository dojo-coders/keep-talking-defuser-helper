const words = {
  podre: 3.505,
  frase: 3.515,
  unido: 3.522,
  opera: 3.532,
  trufa: 3.535,
  misto: 3.542,
  parar: 3.545,
  ritmo: 3.552,
  mundo: 3.555,
  senado: 3.565,
  surfe: 3.572,
  times: 3.575,
  moeda: 3.582,
  malote: 3.592,
  pesca: 3.595,
  pudim: 3.600,
}

const codesOfLetters = {
  a: '.-',
  c: '-.-.',
  d: '-..',
  e: '.',
  f: '..-.',
  i: '..',
  l: '.-..',
  m: '--',
  n: '-.',
  o: '---',
  p: '.--.',
  r: '.-.',
  s: '...',
  t: '-',
  u: '..-',
}

// Converte a palavra passada para código morse
const wordToMorse = word => word
  .split('')
  .map(letter => codesOfLetters[letter])
  .join('')

// Cria um dicionário como o `words`, porém as chaves estão em código morse
const morses = Object
  .keys(words)
  .reduce((acc, word) => {
    const wordMorse = wordToMorse(word)
    return { ...acc, [wordMorse]: words[word] }
  }, {})

const morse = (code) => {
  return morses[code]
}

module.exports = morse
