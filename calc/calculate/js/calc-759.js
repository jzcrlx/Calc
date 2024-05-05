function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 0) {
        Text("每年2.5%的风险");
    } else if (score <= 1) {
        Text("每年7.2%的风险");
    } else if (score <= 3) {
        Text("每年17.6%的风险");
    }
}
