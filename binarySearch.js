let v = [ -14, -7, 2, 4, 14, 33, 79 ];

let s = 0, d = v.length;
let k = -14;


while (s < d) {
    let m = parseInt(( s + d ) / 2);
    if (v[m] === k) {
        console.log(`fouund ${k} at pos. ${m}`);
        break;
    }
    if (k > v[m]) s = s + 1;
    if (k < v[m]) d = d - 1;
}

