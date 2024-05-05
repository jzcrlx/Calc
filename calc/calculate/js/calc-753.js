function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 0) {
        Text("无风险");
    } else if (score <= 1) {
        Text("3%");
    } else if (score <= 2) {
        Text("7%");
    } else if (score <= 3) {
        Text("11%");
    } else if (score <= 4) {
        Text("15%");
    } else if (score <= 5) {
        Text("34%");
    }
}
