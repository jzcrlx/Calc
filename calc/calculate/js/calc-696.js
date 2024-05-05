function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 0) {
        Text("急性脑卒中非常可能");
    } else {
        Text("急性脑卒中不考虑");
    }
}
