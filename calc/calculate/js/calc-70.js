function MDCalc(z) {
    a = z.na;
    b = z.glu;
    if (pref == "si") {
        na_conv = 1;
        glu_conv = 1 / .0555
    }
    if (pref == "us") {
        na_conv = 1;
        glu_conv = 1
    }
    a = a * na_conv;
    b = b * glu_conv;
    value = a + .016 * (b - 100);
    value2 = a + .024 * (b - 100);
    Answer(Round(value, 0));
    Answer2(Round(value2, 0))
}