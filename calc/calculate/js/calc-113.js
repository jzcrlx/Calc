function MDCalc(z) {
    //APRI=AST/ULN/PLT*100
    var value = z.ast / z.uln / z.plt * 100;
    Answer(Round(value, 1));
}