function MDCalc(z) {
    var value = (z.la * z.lb * z.lc) / (z.A * z.B * z.C);
    Answer(Round(value, 2));
}