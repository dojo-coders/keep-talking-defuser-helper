
/**
 * @param {} previousSteps - Array de objetos, cada objeto tem que ter duas chaves como `{ "pos": 1, "num": 3 }`
 * @param {} currentNumber -  número exibido no visor
 * @returns {Object[]} Array com objetos, cada objeto pode ter duas ou uma chave como `{ "pos": 1, "num": 3 }`
*/
const memory = (currentNumber, previousSteps = []) => {
  const step = previousSteps.length

  const getPositionFromStep = (step) => {
    const { pos } = previousSteps[step] || {}
    return { pos }
  }

  const getNumberFromStep = (step) => {
    const { num } = previousSteps[step] || {}
    return { num }
  }

  const roles = [
    {
      1: { "pos": 2 },
      2: { "pos": 2 },
      3: { "pos": 3 },
      4: { "pos": 4 },
    },
    {
      1: { "num": 4 },
      2: getPositionFromStep(0),
      3: { "pos": 1 },
      4: getPositionFromStep(0),
    },
    {
      1: getNumberFromStep(1),
      2: getNumberFromStep(0),
      3: { "pos": 3 },
      4: { "num": 4 },
    },
    {
      1: getPositionFromStep(0),
      2: { "pos": 1 },
      3: getPositionFromStep(1),
      4: getPositionFromStep(1),
    },
    {
      1: getNumberFromStep(0),
      2: getNumberFromStep(1),
      3: getNumberFromStep(3),
      4: getNumberFromStep(2),
    }
  ]

  return roles[step][currentNumber]
}

module.exports = memory
