function MDCalc(z) {
    var value = z.co / (37.7 * z.hr * z.dfp * Math.sqrt(z.mvg));
    var value2 = z.co / (44.3 * z.hr * z.dfp * Math.sqrt(z.mvg));
    Answer(Round(value, 2));
    Answer2(Round(value2, 2));
    Answer3(Round(value2, 2));
    Answer4(Round(value2, 2));
    Answer5(Round(value2, 2));
}
