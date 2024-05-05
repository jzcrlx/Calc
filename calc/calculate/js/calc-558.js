function MDCalc(z) {
    var value = 6.25 * (z.uun + 0.031 * z.weight);
    Answer(Round(value, 2));
}
