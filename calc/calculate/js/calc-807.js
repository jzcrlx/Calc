function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 5) {
        Text("低风险");
    } else {
        Text("高风险");
    }
}
