function MDCalc(z) {
    var score = 0;
    if (z){
        for (var x in z) {
            if (x !== "result") {
                score += z[x];
            }
        }
    }
    Answer(score);
    var msg;
    if (score < 2) {
        msg = "<b>低危人群</b>: PE的概率为1.3%";
    } else if (score >= 2 && score <= 6) {
        msg = "<b>中危人群</b>: PE的概率为16.2%";
    } else if (score > 6) {
        msg = "<b>高危人群</b>: PE的概率为40.6%";
    }
    Text(msg);
}