function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 4) {
        Text("可能性：低");
    } else if (score >= 11) {
        Text("可能性：高");
    } else {
        Text("可能性：中");
    }
}
