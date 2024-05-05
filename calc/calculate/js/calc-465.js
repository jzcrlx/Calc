function MDCalc(z) {
    var score = z.fev1 / z.fvc * 100;
    Answer(Round(score, 2));
}