function MDCalc(z) {
    var value1 = z.ta / (z.tt / 60);
    Answer(Math.round(parseFloat(value1) * 10) / 10);

    var value2 = z.df * z.ta / z.tt;
    Answer2(Math.round(parseFloat(value2)));
}