// Quais aparicoes devem ser cortadas
const rules = {
    "red": {
        1: ["C"], 2: ["B"], 3: ["A"],
        4: ["A", "C"], 5: ["B"], 6: ["A", "C"],
        7: ["A", "B", "C"], 8: ["A", "B"], 9: ["B"],
    },
    "blue": {
        1: ["B"], 2: ["A","C"], 3: ["B"],
        4: ["A"], 5: ["B"], 6: ["B", "C"],
        7: ["C"], 8: ["A", "C"], 9: ["A"],
    },
    "black": {
        1: ["A", "B", "C"], 2: ["A","C"], 3: ["B"],
        4: ["A", "C"], 5: ["B"], 6: ["B", "C"],
        7: ["A", "B"], 8: ["C"], 9: ["C"],
    }
}
   
const seqwires = (lastStep, currentStep) => {
    const newLastStep = {...lastStep, ...currentStep}
    
    // carrega aparicoes e carimba se e para cortar
    const colors = {"red" : [], "blue" : [], "black" : []}
    const loadOccurrences = Object.keys(newLastStep).forEach( (key) => {
        Object.keys(colors).forEach( (color) => {
            if (newLastStep[key][0] === color){
                colors[color].push(color)
                newLastStep[key][2] = rules[color][colors[color].length.toString()].indexOf(newLastStep[key][1]) === -1 ? false : true
            }
        })
    })

    const answer = []
    const makeAnswer = Object.keys(currentStep).forEach( (key) => {
        answer.push(newLastStep[key][2])
    })
    return answer
}
  
module.exports = seqwires