function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 10) {
        Text(changeColor("极高危", "red"));
    } else if (score < 14) {
        Text("高危");
    } else if (score < 18) {
        Text("中危");
    } else {
        Text("低危");
    }
}