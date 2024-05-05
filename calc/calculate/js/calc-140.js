function MDCalc(z) {
    var score = 0;
    var score2 = 0;
    for (var x in z) {
        if (x !== "result" || x !== "result2") {
            score += z[x];
            if (x == "num" && z[x] == 6) {
                score2 += 3;
            } else if (x == "freq" && z[x] == 4) {
                score2 += 2;
            } else if (x == "t" && z[x] == 1) {
                score2 += 4;
            } else if (x == "yuan" && z[x] == 1) {
                score2 += 6;
            } else if (x == "level" && z[x] == 1) {
                score2 += 0;
            } else if (x == "level" && z[x] == 2) {
                score2 += 5;
            } else {
                score2 += z[x];
            }
        }
    }
    Answer(score);
    Answer2(score2);
}