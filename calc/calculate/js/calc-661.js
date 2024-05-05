function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 8) {
        Text("0%");
    } else if (score >= 7) {
        Text("3%")
    } else if (score >= 5) {
        Text("15%");
    } else if (score >= 3) {
        Text("36%");
    } else if (score >= 1) {
        Text("45%");
    } else {
        Text("100%");
    }
}
