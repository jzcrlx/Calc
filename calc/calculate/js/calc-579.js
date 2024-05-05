function MDCalc(z) {
    var value = 80 * (z.pap - z.pawp) / z.co;
    Answer(Round(value, 2));
}
