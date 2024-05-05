pref = "us";

function MDCalc(z) {
    var a = 1;
    var b = 1;
    if (pref == "si") {
        a = 1 / 88.402;
        b = 1 / 88.402;
    }
    var value = (z.ud / z.sd) / ((z.ucr * a) / (z.scr * b));
    Answer(Round(value, 2));
}