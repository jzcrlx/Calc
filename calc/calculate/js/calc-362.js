pref = "us";

function MDCalc(z) {
    var a = 1;
    var b = 1;
    if (pref == "si") {
        a = 1 / 0.25;
        b = 1 / 88.402;
    }
    var value = (z.uca * a) / (z.ucr * b);
    Answer(Round(value, 2));
}
