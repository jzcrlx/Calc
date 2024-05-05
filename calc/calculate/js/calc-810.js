function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score <= 2) {
        Text("49%");
    } else if (score == 3) {
        Text("60%");
    } else if (score == 4) {
        Text("67%");
    } else if (score == 5) {
        Text("77%");
    } else if (score == 6) {
        Text("89%");
    } else if (score == 7) {
        Text("93%");
    } else if (score > 7) {
        Text("95%");
    }
    Answer(score);
}
