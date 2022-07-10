import { randomInt, newArray9x9 as generateNewArray } from './utils'
import { Sudoku } from './Sudoku.js'

class QuizGenerator {

    level

    initialMatrix = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    generateQuestion(maxNumbersInSudoku, solutionMatrix) {
        const question = generateNewArray(this.initialMatrix)
        for (let i = 0; i < maxNumbersInSudoku; i++) {
            const i = randomInt(0, 8)
            const j = randomInt(0, 8)
            question[i][j] = solutionMatrix[i][j]
        }
        return question
    }

    generatedMatrixFromDifficulty() {
        const tempMatrix = generateNewArray(this.initialMatrix)
        tempMatrix[0][0] = randomInt(1, 9)
        tempMatrix[2][8] = randomInt(1, 9)
        tempMatrix[4][4] = randomInt(1, 9)
        tempMatrix[8][2] = randomInt(1, 9)
        tempMatrix[7][7] = randomInt(1, 9)
        tempMatrix[5][6] = randomInt(1, 9)
        const sudoku = new Sudoku(tempMatrix)
        sudoku.solve()
        let question
        let maxNumbersInSudoku
        switch (this.level = 'medium') {
            case 'very_easy':
                maxNumbersInSudoku = randomInt(25, 30)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            case 'easy':
                maxNumbersInSudoku = randomInt(20, 25)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            case 'medium':
                maxNumbersInSudoku = randomInt(18, 22)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            case 'hard':
                maxNumbersInSudoku = randomInt(15, 18)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            case 'very_hard':
                maxNumbersInSudoku = randomInt(12, 15)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            case 'pro_level':
                maxNumbersInSudoku = randomInt(10, 12)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
            default:
                maxNumbersInSudoku = randomInt(25, 30)
                question = this.generateQuestion(maxNumbersInSudoku, tempMatrix)
        }
        return { question, solution: tempMatrix }
    }

    generate(level) {
        this.level = level
        const { question, solution } = this.generatedMatrixFromDifficulty()
        return { question, solution }
    }
}