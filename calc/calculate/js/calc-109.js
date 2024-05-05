function MDCalc(z) {
    if (pref == "si") {
        cr_conv = 1 / 88.4;
    } else if (pref == "us") {
        cr_conv = 1;
    }
    //console.log(z);
    z.cr *= cr_conv;
    if (0 <= z.age && z.age < 35) {
        age2 = 0;
    } else if (35 <= z.age && z.age < 45) {
        age2 = 0 + (z.age - 35) * 1.8;
    } else if (45 <= z.age && z.age < 55) {
        age2 = 18 + (z.age - 45) * 1.8;
    } else if (55 <= z.age && z.age < 65) {
        age2 = 36 + (z.age - 55) * 1.8;
    } else if (65 <= z.age && z.age < 75) {
        age2 = 54 + (z.age - 65) * 1.9;
    } else if (75 <= z.age && z.age < 85) {
        age2 = 73 + (z.age - 75) * 1.8;
    } else if (85 <= z.age && z.age < 90) {
        age2 = 91 + (z.age - 85) * 1.8;
    } else if (z.age >= 90) {
        age2 = 100;
    }
    if (0 <= z.hr && z.hr < 70) {
        pulse2 = 0;
    } else if (70 <= z.hr && z.hr < 80) {
        pulse2 = 0 + (z.hr - 70) * 0.3;
    } else if (80 <= z.hr && z.hr < 90) {
        pulse2 = 3 + (z.hr - 80) * 0.2;
    } else if (90 <= z.hr && z.hr < 100) {
        pulse2 = 5 + (z.hr - 90) * 0.3;
    } else if (100 <= z.hr && z.hr < 110) {
        pulse2 = 8 + (z.hr - 100) * 0.2;
    } else if (110 <= z.hr && z.hr < 150) {
        pulse2 = 10 + (z.hr - 110) * 0.3;
    } else if (150 <= z.hr && z.hr < 200) {
        pulse2 = 22 + (z.hr - 150) * 0.3;
    } else if (z.hr >= 200) {
        pulse2 = 34;
    }

    if (0 <= z.sbp && z.sbp < 80) {
        sysbp2 = 40;
    } else if (80 <= z.sbp && z.sbp < 100) {
        sysbp2 = 40 - (z.sbp - 80) * 0.3;
    } else if (100 <= z.sbp && z.sbp < 110) {
        sysbp2 = 34 - (z.sbp - 100) * 0.3;
    } else if (110 <= z.sbp && z.sbp < 120) {
        sysbp2 = 31 - (z.sbp - 110) * 0.4;
    } else if (120 <= z.sbp && z.sbp < 130) {
        sysbp2 = 27 - (z.sbp - 120) * 0.3;
    } else if (130 <= z.sbp && z.sbp < 140) {
        sysbp2 = 24 - (z.sbp - 130) * 0.3;
    } else if (140 <= z.sbp && z.sbp < 150) {
        sysbp2 = 20 - (z.sbp - 140) * 0.4;
    } else if (150 <= z.sbp && z.sbp < 160) {
        sysbp2 = 17 - (z.sbp - 150) * 0.3;
    } else if (160 <= z.sbp && z.sbp < 180) {
        sysbp2 = 14 - (z.sbp - 160) * 0.3;
    } else if (180 <= z.sbp && z.sbp < 200) {
        sysbp2 = 8 - (z.sbp - 180) * 0.4;
    } else if (z.sbp >= 200) {
        sysbp2 = 0;
    }

    //血肌酐 mg/dl
    if (0 <= z.cr && z.cr < 0.2) {
        crt2 = 0 + (z.cr - 0) * (1 / 0.2);
    } else if (0.2 <= z.cr && z.cr < 0.4) {
        crt2 = 1 + (z.cr - 0.2) * (2 / 0.2);
    } else if (0.4 <= z.cr && z.cr < 0.6) {
        crt2 = 3 + (z.cr - 0.4) * (1 / 0.2);
    } else if (0.6 <= z.cr && z.cr < 0.8) {
        crt2 = 4 + (z.cr - 0.6) * (2 / 0.2);
    } else if (0.8 <= z.cr && z.cr < 1) {
        crt2 = 6 + (z.cr - 0.8) * (1 / 0.2);
    } else if (1 <= z.cr && z.cr < 1.2) {
        crt2 = 7 + (z.cr - 1) * (1 / 0.2);
    } else if (1.2 <= z.cr && z.cr < 1.4) {
        crt2 = 8 + (z.cr - 1.2) * (2 / 0.2);
    } else if (1.4 <= z.cr && z.cr < 1.6) {
        crt2 = 10 + (z.cr - 1.4) * (1 / 0.2);
    } else if (1.6 <= z.cr && z.cr < 1.8) {
        crt2 = 11 + (z.cr - 1.6) * (2 / 0.2);
    } else if (1.8 <= z.cr && z.cr < 2) {
        crt2 = 13 + (z.cr - 1.8) * (1 / 0.2);
    } else if (2 <= z.cr && z.cr < 3) {
        crt2 = 14 + (z.cr - 2) * (7 / 1);
    } else if (3 <= z.cr && z.cr < 4) {
        crt2 = 21 + (z.cr - 3) * (7 / 1);
    } else if (z.cr >= 4) {
        crt2 = 28;
    }

    var chfs;
    if (z.chf == 1) {
        chfs = 0;
    } else if (z.chf == 2) {
        chfs = 15;
    } else if (z.chf == 3) {
        chfs = 29;
    } else if (z.chf == 4) {
        chfs = 44;
    }

    var value = chfs + sysbp2 + pulse2 + age2 + crt2 + 17 * z.st + 13 * z.enzymes + 30 * z.cardiacarrest;

    var prob = '';
    if (value >= 285) {
        prob = 99;
    } else if (value >= 219) {
        prob = 90;
    } else if (value >= 208) {
        prob = 80;
    } else if (value >= 191) {
        prob = 60;
    } else if (value >= 174) {
        prob = 40;
    } else if (value >= 162) {
        prob = 29;
    } else if (value >= 160) {
        prob = 28;
    } else if (value >= 159) {
        prob = 27;
    } else if (value >= 158) {
        prob = 26;
    } else if (value >= 156) {
        prob = 25;
    } else if (value >= 155) {
        prob = 24;
    } else if (value >= 153) {
        prob = 23;
    } else if (value >= 152) {
        prob = 22;
    } else if (value >= 150) {
        prob = 21;
    } else if (value >= 149) {
        prob = 20;
    } else if (value >= 147) {
        prob = 19;
    } else if (value >= 145) {
        prob = 18;
    } else if (value >= 143) {
        prob = 17;
    } else if (value >= 141) {
        prob = 16;
    } else if (value >= 139) {
        prob = 15;
    } else if (value >= 137) {
        prob = 14;
    } else if (value >= 134) {
        prob = 13;
    } else if (value >= 132) {
        prob = 12;
    } else if (value >= 129) {
        prob = 11;
    } else if (value >= 126) {
        prob = 10;
    } else if (value >= 123) {
        prob = 9;
    } else if (value >= 119) {
        prob = 8;
    } else if (value >= 115) {
        prob = 7;
    } else if (value >= 110) {
        prob = 6;
    } else if (value >= 104) {
        prob = 5;
    } else if (value >= 97) {
        prob = 4;
    } else if (value >= 88) {
        prob = 3;
    } else if (value >= 76) {
        prob = 2;
    } else if (value >= 73) {
        prob = 1.8;
    } else if (value >= 69) {
        prob = 1.6;
    } else if (value >= 65) {
        prob = 1.4;
    } else if (value >= 60) {
        prob = 1.2;
    } else if (value >= 55) {
        prob = 1;
    } else if (value >= 48) {
        prob = 0.8;
    } else if (value >= 39) {
        prob = 0.6;
    } else if (value >= 27) {
        prob = 0.4;
    } else if (value >= 6) {
        prob = 0.2;
    }

    Answer(Round(value, 1));
    Text(prob + "%");
}

function changeUnit() {
    if (pref == 'si') {
        $('#cr').attr('placeholder', '62 - 115');
    } else if (pref == 'us') {
        $('#cr').attr('placeholder', '0.7 - 1.3');
    }
}