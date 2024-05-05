function MDCalc(z) {
    var height = z.height * 1;
    var weight = z.weight * 1;
    var value = 0.0061 * height + 0.0128 * weight - 0.1529;
    Answer(Round(value, 3));
}

