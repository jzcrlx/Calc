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
        msg = "无抑郁";
    } else if (score > 10 && score <= 15) {
        msg = "轻度抑郁";
    } else if (score > 15 && score <= 25) {
        msg = "中度抑郁";
    } else if (score > 25) {
        msg = "重度抑郁";
    }
    Text(msg);
}
