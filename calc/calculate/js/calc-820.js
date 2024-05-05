function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    var msg = "";
    if (score <= 10) {
        msg = "正常，无抑郁"
    } else if (score <= 20 && score >= 11) {
        msg = "轻度抑郁"
    } else if (score >= 21) {
        msg = "中重度抑郁"
    }
    Text(msg);
}
