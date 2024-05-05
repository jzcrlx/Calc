function MDCalc(z) {
    //eGFR = 135 x (Scr/A)<sup>B</sup>x (Scys/C)<sup>D</sup> x (0.9961)<sup>年龄</sup> x E
    var age = z.age;
    var scr = z.scr;
    var scys = z.scys;

    var a;
    var b;
    var c;
    var d;
    var e;
    if (pref == "si") {
        scr = (scr / 88.4);
    }
    //女性
    if (z.female == 1) {
        e = 0.963;
        if (scr <= 0.7) {
            if (scys <= 0.8) {
                a = 0.7;
                b = -0.219;
                c = 0.8;
                d = -0.323;
            } else {
                a = 0.7;
                b = -0.219;
                c = 0.8;
                d = -0.778;
            }
        } else {
            if (scys <= 0.8) {
                a = 0.7;
                b = -0.544;
                c = 0.8;
                d = -0.323;
            } else {
                a = 0.7;
                b = -0.544;
                c = 0.8;
                d = -0.778;
            }
        }
    } else {
        //男性
        e = 1;
        if (scr <= 0.9) {
            if (scys <= 0.8) {
                a = 0.9;
                b = -0.144;
                c = 0.8;
                d = -0.323;
            } else {
                a = 0.9;
                b = -0.144;
                c = 0.8;
                d = -0.778;
            }
        } else {
            if (scys <= 0.8) {
                a = 0.9;
                b = -0.544;
                c = 0.8;
                d = -0.323;
            } else {
                a = 0.9;
                b = -0.544;
                c = 0.8;
                d = -0.778;
            }
        }
    }
    //eGFR = 135 x (Scr/A)<sup>B</sup>x (Scys/C)<sup>D</sup> x (0.9961)<sup>年龄</sup> x E
    var value = 135 * Math.pow(scr / a, b) * Math.pow(scys / c, d) * Math.pow(0.9961, age) * e;
    Answer(Round(value, 4));
}

function changeUnit() {
    var cr = $('#scr').val();
    if (pref == 'si') {
        $('#scr').attr('placeholder', '62 - 115');
        if (cr) {
            cr = Round(cr * 88.4, 2);
            $('#scr').val(cr);
        }
    } else if (pref == 'us') {
        $('#scr').attr('placeholder', '0.7 - 1.3');
        if (cr) {
            cr = Round(cr / 88.4, 2);
            $('#scr').val(cr);
        }
    }
}