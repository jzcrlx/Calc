function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            if (key == "age") {
                score += Round(z[key], 0);
            } else {
                score += z[key];
            }
        }
    }
    Answer(score);
}
