function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    var msg;
    if (score > 0) {
        msg = "如满足上述任何一条规则，患者则需要进行影像检查";
    } else if (score == 0) {
        msg = "如不符合上述任何规则，根据渥太华膝关节规则，不需要影像检查。";
    }
    Text(msg);
}

$("#units").hide();