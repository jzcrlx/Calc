function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 0) {
        Text(changeColor("脑卒中可能", "red"));
    }else {
        Text("");
    }
}