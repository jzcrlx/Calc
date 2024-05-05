function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score === 1) {
        Text("3.2%");
    } else if (score === 2) {
        Text("10%");
    } else if (score >= 3) {
        Text("20.2%")
    }
}
