function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 9) {
        Text("建议咨询专业人士");
    } else {
        Text("正常");
    }
}
