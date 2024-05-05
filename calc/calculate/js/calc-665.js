function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 13) {
        if (score < 9) {
            if (score < 5) {
                Text("轻度");
            } else {
                Text("中度");
            }
        } else {
            Text("重度");
        }
    }
}
