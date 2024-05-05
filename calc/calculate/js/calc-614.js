function MDCalc(z) {
    var bsa = 1;
    if (z.sex == 1) {
        bsa = 0.00607 * z.height + 0.0127 * z.weight - 0.0698;
    } else {
        bsa = 0.00586 * z.height + 0.0126 * z.weight - 0.0461;
    }
    var value = z.lvesv / bsa;
    var value2 = z.lvedv / bsa;
    Answer(Round(value, 2));
    Answer2(Round(value2, 2));
}
