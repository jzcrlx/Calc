function MDCalc(z) {
    var height = z.height * 1;
    var weight = z.weight * 1;
    var bsa = 0.0061 * height + 0.0128 * weight - 0.1529;
    var value = bsa * 4184 + 104.6 * z.tbsa;
    Answer(Round(value, 1));
}

