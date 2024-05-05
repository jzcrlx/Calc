function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score >= 1) {
        Text("需要膝关节射片");
    } else {
        Text("无需影像学检查");
    }
}
