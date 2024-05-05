function MDCalc(z) {
    var value = 1.34 * z.co * z.hb * (z.sa - z.sv) / 100;
    Answer(Round(value, 2));
}
