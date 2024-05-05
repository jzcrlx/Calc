function MDCalc(z) {
    var score = z.p * 0.0031 / (z.co2 + z.po2 * 0.0031) * 100;

    Answer(Round(score, 4));
}