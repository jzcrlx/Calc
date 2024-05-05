function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    var msg;
    Answer(score);
    if (score == 0) {
        msg = "卒中风险 0%/年";
    } else if (score == 1) {
        msg = "卒中风险 1.3%/年";
    } else if (score == 2) {
        msg = "卒中风险 2.2%/年";
    } else if (score == 3) {
        msg = "卒中风险 3.2%/年";
    } else if (score == 4) {
        msg = "卒中风险 4.0%/年";
    } else if (score == 5) {
        msg = "卒中风险 6.7%/年";
    } else if (score == 6) {
        msg = "卒中风险 9.8%/年";
    } else if (score == 7) {
        msg = "卒中风险 9.6%/年";
    } else if (score == 8) {
        msg = "卒中风险 6.7%/年";
    } else if (score > 8) {
        msg = "卒中风险 15.2%/年";
    }
    Text(msg);
}