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

const maze = (id, start, finish) => {
  const mazeMatrix = mazes[id[0]]
  const grid = new PF.Grid(mazeMatrix)
  const finder = new PF.BreadthFirstFinder()

  const startPoint = convertCoordinates(start)
  const endPoint = convertCoordinates(finish)

  const path = finder.findPath(...startPoint, ...endPoint, grid)

  const finalPath = path.filter(clearInvalidCoords)

  console.log(path, finalPath)
  return ['R']
}

module.exports = maze
