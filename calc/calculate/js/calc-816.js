function MDCalc(z) {
    // console.log(z)
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    var result = 0;
    if (score > 0) {
        result = score / 10;
    }

    Answer(Round(result, 2));
}