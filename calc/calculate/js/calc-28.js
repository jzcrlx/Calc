function MDCalc(z) {
    a = z.na_s;
    b = z.na_u;
    c = z.cr_s;
    d = z.cr_u;
    value = 100 * b * c / (a * d);
    Answer(Round(value, 2))
}