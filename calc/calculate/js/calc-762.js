function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    Answer1(z.a1 + z.a2 + z.a3 + z.a4 + z.a5 + z.a6);
    Answer2(z.b1 + z.b2 + z.b3 + z.b4 + z.b5 + z.b6);
}
