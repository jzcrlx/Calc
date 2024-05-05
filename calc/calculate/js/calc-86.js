function MDCalc(z) {
    var pai = 3.1415926536;
    value = pai * z.hr * z.diam * z.diam * z.vti / 4e3;
    value2 = value / z.bsa;
    Answer(Math.round(parseFloat(value) * 10) / 10);
    Answer2(Math.round(parseFloat(value2) * 10) / 10)
}