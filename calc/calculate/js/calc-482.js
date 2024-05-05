function MDCalc(z) {
    if (z.sex == 1) {
        var value = 757 * z.height / 100 - 5.02 * z.age - 1.76 * z.weight - 309;
        Answer(Round(value, 1));
    } else {
        var value = 211 * z.height / 100 - 5.78 * z.age - 2.29 * z.weight + 667;
        Answer(Round(value, 1));
    }
}
