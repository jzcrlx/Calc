function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 1) {
        Text("化脓性关节炎可能性 < 0.2%");
    } else if (score < 2) {
        Text("化脓性关节炎可能性：3%");
    } else if (score < 3) {
        Text("化脓性关节炎可能性：40%");
    } else if (score < 4) {
        Text("化脓性关节炎可能性：93%");
    } else {
        Text("化脓性关节炎可能性 > 99%")
    }
}
