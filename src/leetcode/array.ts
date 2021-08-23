const spiralOrder = (matrix)=>{
    const matrixRow = matrix.length
    const matrixCol = matrix[0].length
    let startRow = 0, endRow = matrixRow
    let startCol = 0, endCol = matrixCol
    const res = []
    while ((startRow < endRow) && (startCol < endCol)) {
        console.log(`
        startRow: ${startRow}
        endRow: ${endRow}
        startCol: ${startCol}
        endCol: ${endCol}
        `)
        for (let index = startCol; index < endCol; index++) {
            const element = matrix[startRow][index];
            res.push(element)
            console.log(element)

        }

        console.log("-----------")

        for (let index = startRow + 1; index < endRow; index++) {
            const element = matrix[index][endCol - 1];
            res.push(element)
            console.log(element)
        }

        console.log("-----------")

        for (let index = endCol - 2; index >= startCol; index--) {
            if(endRow - startRow > 1){
                const element = matrix[endRow-1][index];
                res.push(element)
                console.log(element)
            }

        }

        console.log("-----------")

        for (let index = endRow - 2; index > startRow; index--) {
            if(endCol - startCol > 1){
                const element = matrix[index][startCol];
                res.push(element)
                console.log(element)
            }

        }

        console.log("-----------")

        startCol++
        startRow++
        endRow--
        endCol--
    }
    return res
}

function testSpiralOrder(){
    // const matrix = [[1,2,3,4,13],[5,6,7,8,14],[9,10,11,12,15],[16,17,18,19,20]]
    // const matrix = [[1,2,3],[4,5,6],[7,8,9]]
    // const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
    const matrix = [[6],[7],[9]]
    spiralOrder(matrix)
}

testSpiralOrder()