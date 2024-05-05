function MDCalc(z) {
    var value = 80 * (z.map - z.cp) / z.co;
    Answer(Round(value, 2));
}
