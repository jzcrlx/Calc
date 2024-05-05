function MDCalc(z) {
    var a = z.wt;
    var b = z.na_s;
    var c = z.na_nl;
    var wt_conv;
    var tbw;
    if (pref == "si") {
        wt_conv = 1;
    } else if (pref == "us") {
        wt_conv = 1 / 2.2;
    }
    a *= wt_conv;
    if (z.sex == 2) {
        tbw = 0.5;
    } else {
        tbw = 0.6;
    }
    var value = tbw * a * (c - b);
    Answer(Round(value, 1));
}