const PF = require('pathfinding')
const mazes = require('./mazes')

const col2Number = { A: 1, B: 3, C: 5, D: 7, E: 9, F: 11, }

const row2Number = { '1': 1, '2': 3, '3': 5, '4': 7, '5': 9, '6': 11, }

const convertCoordinates = (coord) => {
return coord.split('').map((letter, i) => {
    return ((i === 0) ? col2Number : row2Number)[letter]
  })
}

const clearInvalidCoords = coord => !coord.some(n => n % 2 === 0)

const getDirection = (coordA, coordB) => {
  const [xa, ya] = coordA
  const [xb, yb] = coordB

  if (xa !== xb) {
    return (xa > xb) ? 'L' : 'R'
  }

  return (ya > yb) ? 'U' : 'D'
}

const convertCoordToDirection = (coords) => {
  return coords.reduce((acc, coord, i, arr) => {
    if (i + 1 === arr.length) return acc

    const nextCoord = arr[i + 1]
    const direction = getDirection(coord, nextCoord)

    return [ ...acc, direction ]
  }, [])
}

/**
 * Coordenada composta de letra e número. Letra representa a coluna e número a linha.
 * @typedef {Coordenate}
 */

/**
 * Módulo labirinto
 * @param {Coordenate[]} id - Array com uma ou duas coordenadas que identificam o labirinto (circulos brancos)
 * @param {Coordenate} start - Posição inicial do jogador no labirinto (ponto branco)
 * @param {Coordenate} finish - Posição do objetivo final (triângulo vermelho)
 * @returns {string[]} - Lista com letras que indicam a direção
 * ```
 * R - Right (Direita)
 * L - Left (Esquerda)
 * U - Up (Cima)
 * D - Down (Baixo)
 * ```
 * @example
 * maze(['B4'], 'A1', 'E5')
 * // returns ['R', 'D', 'L', ... ]
 * @example
 * maze(['A2'], 'A1', 'B1')
 * // returns ['R']
 */
const maze = (id, start, finish) => {
  const mazeMatrix = mazes[id[0]]
  const grid = new PF.Grid(mazeMatrix)
  const finder = new PF.BreadthFirstFinder()

  const startPoint = convertCoordinates(start)
  const endPoint = convertCoordinates(finish)

  const path = finder.findPath(...startPoint, ...endPoint, grid)

  const finalPath = path.filter(clearInvalidCoords)

  return convertCoordToDirection(finalPath)
}

module.exports = maze
