const matUtil = require('./utils.js');

const mat1 = [
    [1, 3, 5],
    [2, 4, 6],
    [3, 6, 9]

]

const mat2 = [
    [7, 8, 9],
    [9, 8, 7],
    [4, 5, 6]

]

 console.log(matUtil.matrixProduct(mat1, mat2))
 console.log(matUtil.sumOfMatrices(mat1, mat2))
 console.log(matUtil.sumOfEachRow(mat1))