const PF = require('pathfinding')
const mazes = require('./mazes')

const col2Number = { A: 1, B: 3, C: 5, D: 7, E: 9, F: 11, }

const row2Number = { '1': 1, '2': 3, '3': 5, '4': 7, '5': 9, '6': 11, }

const convertCoordinates = (coord) => {
return coord.split('').map((letter, i) => {
    return ((i === 0) ? col2Number : row2Number)[letter]
  })
}

const maze = (id, start, finish) => {
  const mazeMatrix = mazes[id[0]]
  const grid = new PF.Grid(mazeMatrix)
  const finder = new PF.BreadthFirstFinder()

  const startPoint = convertCoordinates(start)
  const endPoint = convertCoordinates(finish)

  const params = [
    ...startPoint,
    ...endPoint,
    grid
  ]

  console.log(params)

  const path = finder.findPath(...params)

  console.log(path)
  return ['R']
}

module.exports = maze
