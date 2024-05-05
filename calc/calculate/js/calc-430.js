function MDCalc(z) {
    var score = 0.56 * Math.sqrt(z.t28) + 0.28 * Math.sqrt(z.sw28) + 0.70 * Math.log(z.esr) + 0.014 * z.vas;
    Answer(Round(score, 2));
}
