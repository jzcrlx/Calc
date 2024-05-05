function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    var msg;
    if (score > 0) {
        msg = "符合上述任何标准，颈椎情况不清，需要进行成像检查。";
    } else if (score < 1) {
        msg = "上述任何标准均不符合，可以判定颈椎情况，无需进行成像检查。";
    }
    Text(msg);
}

$("#units").hide();