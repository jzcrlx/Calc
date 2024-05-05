function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    console.log(score);
    Answer(score);
    if (score === 0) {
        Text("患者有较低风险发生严重不良转归");
    }else {
        Text("患者有较高风险发生严重不良转归");
    }
}
