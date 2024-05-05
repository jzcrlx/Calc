function MDCalc(z) {
    //2021 eGFR = 142 x (Scr/A)^B x (0.9938)^年龄 x C
    var age = z.age;
    var scr = z.cr;
    var a, b, c;
    if (pref == "si") {
        scr = (scr / 88.4);
    }
    //女性
    if (z.female == 1) {
        a = 0.7;
        c = 1.012;
        if (scr <= 0.7) {
            b = -0.241;
        } else {
            b = -1.2;
        }
    } else {
        //男性
        a = 0.9;
        c = 1;
        if (scr <= 0.9) {
            b = -0.302;
        } else {
            b = -1.2;
        }
    }

    var value = 142 * Math.pow(scr / a, b) * Math.pow(0.9938, age) * c;
    Answer(Round(value, 4))
}

function changeUnit() {
    var cr = $('#cr').val();
    if (pref == 'si') {
        $('#cr').attr('placeholder', '62 - 115');
        if (cr) {
            cr = Round(cr * 88.4, 2);
            $('#cr').val(cr);
        }
    } else if (pref == 'us') {
        $('#cr').attr('placeholder', '0.7 - 1.3');
        if (cr) {
            cr = Round(cr / 88.4, 2);
            $('#cr').val(cr);
        }
    }
}