function MDCalc(z) {

    a = z.age;
    b = z.cr;
    if (pref == "si") {
        cr_conv = 1 / 88.4;
    }
    if (pref == "us") {
        cr_conv = 1;
    }
    b *= cr_conv;
    a = Math.pow(a, -.203);
    b = Math.pow(b, -1.154);
    value = 186 * a * b;
    //黑人
    if (z.afam == 1) {
        value = value * 1.212;
    }
    //女性
    if (z.female == 1) {
        value = value * .742;
    }
    Answer(Round(value, 1));
}
function changeUnit() {
    if (pref == 'si') {
        $('#cr').attr('placeholder', '62 - 115');
    } else if (pref == 'us') {
        $('#cr').attr('placeholder', '0.7 - 1.3');
    }
}