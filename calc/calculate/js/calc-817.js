function MDCalc(z) {
    var score = 0;
    //选择不相关个数
    var r_count = 0;
    for (var key in z) {
        if (key !== "result" && key !== "result1" && key !== "item7More") {
            //不相关
            if (z[key] == -1) {
                r_count++;
            } else if (key == "item7") {
                if (z[key] == 2 && z.item7More != null) {
                    score += z.item7More;
                }
            } else {
                score += z[key];
            }
        }
    }
    var score_r = score * 10 / (10 - r_count);
    Answer(Round(score, 0));
    Answer1(Round(score_r, 2));
}