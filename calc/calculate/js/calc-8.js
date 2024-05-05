function MDCalc(z) {
    var value = z.na - z.cl - z.hco3;
    Answer(Round(value, 1));
    var nl = 12;
    var deltagap = value - nl;
    Answer2(deltagap);

    var deltaratio = deltagap / (24 - z.hco3);
    Answer3(Round(deltaratio, 2));
}