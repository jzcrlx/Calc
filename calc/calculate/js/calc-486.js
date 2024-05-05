function MDCalc(z) {
    if (z.sex == 1) {
        var value = 66 + 13.7 * z.weight + 5.0 * z.height - 6.8 * z.age * z.ying;
        Answer(Round(value, 1));
    } else {
        var value = 65 + 9.6 * z.weight + 1.7 * z.height - 4.7 * z.age * z.ying;
        Answer(Round(value, 1));
    }
}
