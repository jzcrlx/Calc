function MDCalc(z) {
    if (pref == "si") {
        ht_conv = 1;
        wt_conv = 1
    }
    if (pref == "us") {
        ht_conv = 2.54;
        wt_conv = 1 / 2.2;
    }
    z.wt = z.wt * wt_conv;
    z.ht = z.ht * ht_conv;
    if (z.female == 0) {
        value = 66.5 + 13.75 * z.wt + 5.003 * z.ht - 6.775 * z.age
    }
    if (z.female == 1) {
        value = 655.1 + 9.563 * z.wt + 1.85 * z.ht - 4.676 * z.age
    }
    Answer(Round(value, 0));
}