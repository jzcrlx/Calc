function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score >= 25) {
        Text("Likely to be severely ill");
    } else {
        Text("Not likely to be severely ill");
    }
}
