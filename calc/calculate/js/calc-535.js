function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            if (key == "zao") {
                score += Round(z.zao / 100, 0);
            } else {
                score += z[key];
            }
        }
    }
    Answer(score);
}
