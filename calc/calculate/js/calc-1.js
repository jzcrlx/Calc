function MDCalc(z) {
    var value = z.fio2 / 100 * (760 - 47) - z.paco2 / 0.8 - z.pao2;
    Answer(Round(value, 2));
}