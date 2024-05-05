function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 1) {
        Text("0-1分：跌倒风险为2.4%-4.1%");
    } else if (score <= 5) {
        Text("2-5分：跌倒风险为42%-65.3%");
    }
}
