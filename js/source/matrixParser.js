function matrixParser(m){

    //add sanity check for "None" matrix
    var w = m.split(','), i = 0;
    w[0]=w[0].split('(')[1];

    while(i<w.length){
        w[i] = parseFloat(w[i++]);
    }

    return w;
}