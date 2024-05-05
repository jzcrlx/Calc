function MDCalc(z) {
    var a = z.wt;
    if (pref == "si") {
        wt_conv = 1
    }
    if (pref == "us") {
        wt_conv = 1 / 2.2
    }
    a = a * wt_conv;
    a = Math.round(a * 1) / 1;
    var sum = 0;
    if (a <= 10) {
        value = a * 4
    }
    if (a > 10 && a <= 20) {
        value = 40 + (a - 10) * 2
    }
    if (a > 20) {
        value = 60 + (a - 20) * 1
    }
    value3 = 20 * a;
    Answer(Round(value, 0));
    Text1(Round(value * 1.5, 0));
    Text2(Round(value3, 0));
    $('.result-list').show();
}