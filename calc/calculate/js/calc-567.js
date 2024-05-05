function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            if (key == "bingfa" || key == "fuxie") {
                score += Round(z[key], 0);
            } else {
                score += z[key];
            }
        }
    }
    Answer(score);
}
