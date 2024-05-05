function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 4) {
        Text("低危");
    } else if (score > 5) {
        Text(changeColor("高危","red"));
    } else {
        Text("中危");
    }
}