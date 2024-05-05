function MDCalc(z) {
    if (z.aagrad && z.pao2) {
        showInfo("根据FiO<sub>2</sub>的大小，只需输入肺泡-动脉氧分压差或PaO<sub>2</sub>中的一个。");
        $("#aagrad").val("");
        $("#pao2").val("");
        $("#result").val("");
        Text('');
        return false;
    } else {
        if (z.aagrad) {
            o2 = "aagrad";
            o = z.aagrad;
        }
        if (z.pao2) {
            o2 = "pao2";
            o = z.pao2;
        }
        if (typeof o2 == "undefined") {
            return false;
        }
    }
    a = z.age;
    b = z.temp;
    c = z.ph;
    d = z.hr;
    e = z.rr;
    f = z.na;
    g = z.pot;
    h = z.cr;
    i = z.hct;
    j = z.wbc;
    k = z.gcs;
    l = z.map;
    if (pref == "si") {
        cr_conv = 1 / 88.4;
    }
    if (pref == "us") {
        cr_conv = 1;
    }
    h *= cr_conv;
    value = 0;
    if (o2 == "aagrad") {
        if (o > 499) {
            value = value + 4;
        }
        if (350 <= o && o <= 499) {
            value = value + 3;
        }
        if (200 <= o && o < 350) {
            value = value + 2;
        }
        if (o < 200) {
            value = value + 0;
        }
    }
    if (o2 == "pao2") {
        if (o > 70) {
            value = value + 0;
        }
        if (61 <= o && o <= 70) {
            value = value + 1;
        }
        if (55 <= o && o < 61) {
            value = value + 3;
        }
        if (o < 55) {
            value = value + 4;
        }
    }
    k = 15 - k;
    value = value + k;
    if (j >= 40) {
        value = value + 4;
    }
    if (20 <= j && j < 40) {
        value = value + 2;
    }
    if (15 <= j && j < 20) {
        value = value + 1;
    }
    if (3 <= j && j < 15) {
        value = value + 0;
    }
    if (1 <= j && j < 3) {
        value = value + 2;
    }
    if (j < 1) {
        value = value + 4;
    }
    if (i > 59.9) {
        value = value + 4;
    }
    if (50 <= i && i <= 59.9) {
        value = value + 2;
    }
    if (46 <= i && i < 50) {
        value = value + 1;
    }
    if (30 <= i && i < 46) {
        value = value + 0;
    }
    if (20 <= i && i < 30) {
        value = value + 2;
    }
    if (i < 20) {
        value = value + 4;
    }
    if (z.arf == 1) {
        if (h > 3.4) {
            value = value + 8;
        }
        if (2 <= h && h <= 3.4) {
            value = value + 6;
        }
        if (1.5 <= h && h < 2) {
            value = value + 4;
        }
        if (.6 <= h && h < 1.4) {
            value = value + 0;
        }
        if (h < .6) {
            value = value + 2;
        }
    }
    if (z.arf == 0) {
        if (h > 3.4) {
            value = value + 4;
        }
        if (2 <= h && h <= 3.4) {
            value = value + 3;
        }
        if (1.5 <= h && h < 2) {
            value = value + 2;
        }
        if (.6 <= h && h < 1.4) {
            value = value + 0;
        }
        if (h < .6) {
            value = value + 2;
        }
    }
    if (g > 6.9) {
        value = value + 4;
    }
    if (6 <= g && g <= 6.9) {
        value = value + 3;
    }
    if (5.5 <= g && g < 6) {
        value = value + 1;
    }
    if (3.5 <= g && g < 5.5) {
        value = value + 0;
    }
    if (3 <= g && g < 3.5) {
        value = value + 1;
    }
    if (2.5 <= g && g < 3) {
        value = value + 2;
    }
    if (g < 2.5) {
        value = value + 4;
    }
    if (f > 179) {
        value = value + 4;
    }
    if (160 <= f && f <= 179) {
        value = value + 3;
    }
    if (155 <= f && f < 159) {
        value = value + 2;
    }
    if (150 <= f && f < 155) {
        value = value + 1;
    }
    if (130 <= f && f < 150) {
        value = value + 0;
    }
    if (120 <= f && f < 130) {
        value = value + 2;
    }
    if (111 <= f && f < 120) {
        value = value + 3;
    }
    if (f < 111) {
        value = value + 4;
    }
    if (e > 49) {
        value = value + 4;
    }
    if (35 <= e && e <= 49) {
        value = value + 3;
    }
    if (25 <= e && e < 35) {
        value = value + 1;
    }
    if (12 <= e && e < 25) {
        value = value + 0;
    }
    if (10 <= e && e < 12) {
        value = value + 1;
    }
    if (6 <= e && e < 10) {
        value = value + 2;
    }
    if (e < 6) {
        value = value + 4;
    }
    if (c > 7.69) {
        value = value + 4;
    }
    if (7.59 < c && c <= 7.69) {
        value = value + 3;
    }
    if (7.49 < c && c <= 7.59) {
        value = value + 1;
    }
    if (7.32 < c && c <= 7.49) {
        value = value + 0;
    }
    if (7.24 < c && c <= 7.32) {
        value = value + 2;
    }
    if (7.15 <= c && c <= 7.24) {
        value = value + 3;
    }
    if (c < 7.15) {
        value = value + 4;
    }
    if (b > 60) {
        b = (b - 32) * (5 / 9);
    }
    if (b < 30) {
        value = value + 4;
    }
    if (30 <= b && b < 32) {
        value = value + 3;
    }
    if (32 <= b && b < 34) {
        value = value + 2;
    }
    if (34 <= b && b < 36) {
        value = value + 1;
    }
    if (36 <= b && b < 38.5) {
        value = value + 0;
    }
    if (38.5 <= b && b < 39) {
        value = value + 1;
    }
    if (39 <= b && b < 40.9) {
        value = value + 3;
    }
    if (b >= 40.9 && b < 60) {
        value = value + 4;
    }
    if (a < 45) {
        value = value + 0;
    }
    if (45 <= a && a < 55) {
        value = value + 2;
    }
    if (55 <= a && a < 65) {
        value = value + 3;
    }
    if (65 <= a && a < 75) {
        value = value + 5;
    }
    if (a >= 75) {
        value = value + 6;
    }
    if (z.immuno == 6) {
        value += 5;
    } else {
        value += z.immuno;
    }
    if (d > 179) {
        value = value + 4;
    }
    if (140 <= d && d <= 179) {
        value = value + 3;
    }
    if (110 <= d && d < 140) {
        value = value + 2;
    }
    if (70 <= d && d < 110) {
        value = value + 0;
    }
    if (55 <= d && d < 70) {
        value = value + 2;
    }
    if (40 <= d && d < 55) {
        value = value + 3;
    }
    if (d < 40) {
        value = value + 4;
    }
    if (l <= 49) {
        value = value + 4;
    }
    if (l > 49 && l <= 69) {
        value = value + 2;
    }
    if (l > 69 && l <= 109) {
        value = value + 0;
    }
    if (l > 109 && l <= 129) {
        value = value + 2;
    }
    if (l > 129 && l <= 159) {
        value = value + 3;
    }
    if (l > 159) {
        value = value + 4;
    }
    Answer(Round(value, 1));
    if (z.immuno == 6 || z.immuno == 2) {
        if (value.between(0, 4)) {
            msg = "1% ";
        } else if (value.between(5, 9)) {
            msg = "3% ";
        } else if (value.between(10, 14)) {
            msg = "6% ";
        } else if (value.between(15, 19)) {
            msg = "11% ";
        } else if (value.between(20, 24)) {
            msg = "29% ";
        } else if (value.between(25, 29)) {
            msg = "37% ";
        } else if (value.between(30, 34)) {
            msg = "71% ";
        } else if (value > 34) {
            msg = "87% ";
        }
        msg1 = "在一项研究中预估术后死亡率" + msg;
    } else {
        if (value.between(0, 4)) {
            msg = "4% ";
        } else if (value.between(5, 9)) {
            msg = "6% ";
        } else if (value.between(10, 14)) {
            msg = "12% ";
        } else if (value.between(15, 19)) {
            msg = "22% ";
        } else if (value.between(20, 24)) {
            msg = "40% ";
        } else if (value.between(25, 29)) {
            msg = "51% ";
        } else if (value.between(30, 34)) {
            msg = "71% ";
        } else if (value > 34) {
            msg = "82% ";
        }
        msg1 = "在一项研究中预估非手术死亡率" + msg
    }
    Text(msg1);
}

function showInfo(msg) {
    layer.open({
        title: "提示",
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
    return true;
}