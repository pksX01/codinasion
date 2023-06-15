// Functions:

// returns the minor for every element in matrix
// and applies cofactor sign to minor
function minorAndSign(matrix: number[][], row: number, column: number) {
  const detNums: number[] = [];
  let detNumIdx = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i !== row && j !== column) {
        detNums[detNumIdx] = matrix[i][j];
        detNumIdx++;
      }
    }
  }
  // apply cofactor sign
  if ((row + column) % 2 !== 0) {
    return detNums[1] * detNums[2] - detNums[0] * detNums[3];
  }
  return detNums[0] * detNums[3] - detNums[1] * detNums[2];
}

// print matrix
function printMatrix(matrix: number[][]) {
  for (let row = 0; row < matrix.length; row++) {
    console.log(matrix[row]);
  }
}

// Main:

// No html file, so set matrix values here
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// get determinant
const det =
  matrix[0][0] * minorAndSign(matrix, 0, 0) +
  matrix[0][1] * minorAndSign(matrix, 0, 1) +
  matrix[0][2] * minorAndSign(matrix, 0, 2);

if (det === 0) {
  console.log("Matrix is not invertible");
} else {
  // For each element:
  //  get minor with cofactor sign
  //  divide by determinant
  //  put on other side of diagonal
  const invMatrix: number[][] = [[], [], []];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const minor = minorAndSign(matrix, i, j);
      invMatrix[j][i] = minor / det; // put on other side of diagonal
    }
  }
  printMatrix(invMatrix);
}
