function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 0) {
        Text("完全缓解（CR）");
    } else if (score <= 1) {
        Text("部分缓解（PR）");
    } else if (score <= 2) {
        Text("疾病稳定（SD）");
    } else if (score <= 3) {
        Text("疾病进展（PD）");
    }
}
