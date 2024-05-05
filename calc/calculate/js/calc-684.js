function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 4) {
        Text("脑卒中低危");
    } else if (score > 7) {
        Text(changeColor("脑卒中高危", "red"));
    } else {
        Text("即刻脑卒中风险");
    }
}