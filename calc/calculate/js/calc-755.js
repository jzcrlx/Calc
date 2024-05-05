function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 2) {
        Text("不存在代谢综合征");
    } else if (score >= 3) {
        Text("存在代谢综合征")
    }
}
