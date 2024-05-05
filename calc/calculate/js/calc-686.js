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
        Text("1.9% / yr");
    } else if (score === 1) {
        Text("2.5% / yr");
    } else if (score === 2) {
        Text("5.3% / yr");
    } else if (score === 2) {
        Text("5.3% / yr");
    } else if (score === 3) {
        Text("8.4% / yr");
    } else if (score === 4) {
        Text("10.4% / yr");
    } else if (score === 5) {
        Text("12.3% / yr");
    }
}