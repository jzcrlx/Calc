function MDCalc(z) {

    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score === 1) {
        Text(changeColor("5%", "#fc993d"));
    } else if (score === 2) {
        Text(changeColor("8%", "#fc993d"));
    } else if (score === 3) {
        Text(changeColor("13%", "#fc993d"));
    } else if (score === 4) {
        Text(changeColor("20%", "#fc993d"));
    } else if (score === 5) {
        Text(changeColor("26%", "#fc993d"));
    } else if (score === 6) {
        Text(changeColor("41%", "red"));
    } else if (score === 7) {
        Text(changeColor("41%", "red"));
    }
}