function MDCalc(z) {
    var p = 50;
    if (z.sex == 2) {
        p = 45.5;
    }
    var value = p + 0.9 * (z.height - 150);
    Answer(Round(value, 1));
}