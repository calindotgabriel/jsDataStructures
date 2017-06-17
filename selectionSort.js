let i, piv, v = [ 4 , 6 , 3 , -3 , 2 , 22 , 7 , -14 ]

for (i = 0 ; i < v.length ; i++) {
    piv = i;
    for (j = i ; j < v.length ; j ++)
        if (v[j] < v[piv]) {
            let aux = v[piv];
            v[piv] = v[j];
            v[j] = aux;
        }
    }

v.forEach(e => console.log(e))