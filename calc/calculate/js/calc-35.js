function MDCalc(z) {
    var msg = "";
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x]
        }
    }
    Answer(score);
    if (score == 0) {
        msg = "低";
    } else if (score == 1) {
        msg = "中";
    } else {
        msg = "高";
    }
    Text(msg);
}
