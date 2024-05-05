function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 2) {
        Text("DVT 低危");
    } else {
        Text(changeColor("DVT 高危", "red"));
    }
}