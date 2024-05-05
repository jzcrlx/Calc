function MDCalc(z) {
    //console.log(z);
    var score = 0;
    var alertStrings1;
    var alertStrings2;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score === 0 || score === 1) {
        alertStrings1 = "Low Risk";
        alertStrings2 = "70 %";
    } else if (score === 2) {
        alertStrings1 = "Intermediate Risk";
        alertStrings2 = "50 %";
    } else {
        alertStrings1 = "High Risk";
        alertStrings2 = "35 %";
    }
    Answer(score);
    Text1(alertStrings1);
    Text2(alertStrings2);
}
