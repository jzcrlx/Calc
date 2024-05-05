function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    if (score <= 6) {
        Text("低危");
    } else {
        Text(changeColor("高危","red"));
    }
}