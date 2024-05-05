function MDCalc(z) {
    var value = z.jwbc - ((1000 * z.xwbc) * z.nrbc / (1000000 * z.xrbc));
    Answer(Round(value, 2));
}