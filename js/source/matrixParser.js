function matrixParser(matrix){

    //add sanity check for "None" matrixatrix
    //add sanity check for typeof matrix == string
    var parsedMatrix = matrix.split(','), i = 0;
    parsedMatrix[0]=parsedMatrix[0].split('(')[1];

    while(i<parsedMatrix.length){
        parsedMatrix[i] = parseFloat(parsedMatrix[i++]);
    }

    return parsedMatrix;
}