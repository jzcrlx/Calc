function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }

    Answer(score);
    if (score <= 0) {
        Text("极可能为无菌性脑膜炎");
    } else if (score <= 1) {
        Text("无菌性脑膜炎可能性较小")
    } else if (score >= 2) {
        Text("细菌性脑膜炎高风险");
    }
}
