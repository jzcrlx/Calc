function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    var msg;
    if (score > 8) {
        msg = "Alvarado评分显示确定为阑尾炎。";
    } else if (score > 6 && score < 9) {
        msg = "Alvarado评分显示很可能为阑尾炎。";
    } else if (score > 4 && score < 7) {
        msg = "Alvarado评分显示可能为阑尾炎。";
    } else if (score < 5) {
        msg = "Alvarado评分显示不可能为阑尾炎。";
    }
    Text(msg);
}

$("#units").hide();