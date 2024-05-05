function MDCalc(z) {
    var value = (z.fh + z.mh + 13) / 2;
    if (z.sex == 2) {
        value = (z.fh + z.mh - 13) / 2;
    }
    Answer(Round(value, 1) + " ±8.5");
}
