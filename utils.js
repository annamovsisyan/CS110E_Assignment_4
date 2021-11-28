module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
}

function matrixProduct(mat1, mat2) {
    if (mat1[0].length !== mat2.length) {
        console.log("The product cannot be calculated, as the number of columns of the first matric is not equal to the number of rows of the second one.")
        return;
    }
    let result = [];
    for (let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for ( let j = 0; j < mat1.length; j++) {
            result[i][j] = 0 
            for (let k = 0; k < mat2.length; k++) {
                result[i][j] += mat1[i][k] * mat2[k][j]
            
            }
        }

    }
    return result 
} 


function sumOfMatrices(mat1, mat2) {
    if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length) {
        console.log("The sum cannot be calculated, as matrices do not have equal dimensions.")
        return;
    }
    let result = [];
    for (  let i = 0; i < mat1.length; i++) {
        result[i] = [];
        for ( let j = 0; j < mat1[i].length; j++) {
            result[i][j] = (mat1[i][j] + mat2[i][j]);
        }    
     }
     return result;
 }


 function sumOfArray(mat) {
    let result = 0;
    for (let i = 0; i < mat.length; i++) {
       result += mat[i];
    }
    return result;
 }

 function sumOfEachRow(mat) {
    let result = [];
    for (let i = 0; i < mat.length; i++) {
       result.push(sumOfArray(mat[i]))
    }
    return result;
 }
