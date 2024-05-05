function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    var msg;
    if (score < 8) {
        msg = "PERC判定原则仅适用于8项标准全部满足的情况。";
    } else if (score == 8) {
        msg = "根据PERC研究，此患者PE的危险性不足2%。";
    }
    Text(msg);
}

$("#units").hide();