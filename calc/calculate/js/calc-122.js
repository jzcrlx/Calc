function MDCalc(z) {
    var p = 5;
    if (z.sex == 2) {
        p = -161;
    }
    var value = 10 * z.weight + 6.25 * z.height - 5 * z.age + p;
    Answer(Round(value, 2));
}

