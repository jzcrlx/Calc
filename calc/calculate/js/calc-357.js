pref = "us";

function MDCalc(z) {
    var bili = z.bili;
    var alb = z.alb;
    if (pref == "si") {
        bili = bili / 17.1;
        alb = alb / 10;
    }
    Answer(Round(bili / alb, 2));
}