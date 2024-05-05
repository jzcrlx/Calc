function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    if (score == 0) {
        msg = "低危组:30天病死率0.6%，考虑门诊治疗。";
    } else if (score == 1) {
        msg = "低危组:30天病死率2.7%，考虑门诊治疗。";
    } else if (score == 2) {
        msg = "中危组:30天病死率6.8%，考虑住院治疗或在门诊密切随访。";
    } else if (score == 3) {
        msg = "高危组:30天病死率14.0%,考虑住院治疗，可能需要收入ICU。";
    } else if (score > 3) {
        msg = "极高危组:30天病死率27.8%,考虑住院治疗，可能需要收入ICU。";
    }
    Text(msg);
}

$("#units").hide();