function MDCalc(z) {
    $('#res-div').show();
    $('#res1').show();
    if (z.sex !== 0.85) {
        z.sex = 1;
    }
    a = z.age;
    wt = z.wt;
    c = z.cr;
    ht = z.ht;
    if (pref == "si") {
        wt_conv = 1;
        cr_conv = 1 / 88.4;
        crcl_conv = 1;
        ht_conv = 1;
    } else if (pref == "us") {
        wt_conv = 1 / 2.2;
        crcl_conv = 1;
        cr_conv = 1;
        ht_conv = 2.54;
    }
    wt *= wt_conv;
    c *= cr_conv;
    ht *= ht_conv;
    //原始公式
    var value = (140 - a) * wt * z.sex / (72 * c) * crcl_conv;
    //计算BMI
    if (ht && ht > 0) {
        var bmi = wt / Math.pow(ht / 100, 2);
        bmi = Round(bmi, 1);
        //理想体重
        var ibw;
        if (z.sex !== 0.85) {
            ibw = 50 + (2.3 * (ht / 2.54 - 60));
            if (ibw < 50) {
                ibw = 50;
            }
        } else {
            //女性
            ibw = 45.5 + (2.3 * (ht / 2.54 - 60));
            if (ibw < 45.5) {
                ibw = 45.5;
            }
        }
        //校正体重
        var abw = ibw + 0.4 * (wt - ibw);
        //console.log("bmi", bmi);
        //console.log("ibw", ibw);
        //console.log("abw", abw);
        var value_ibw = (140 - a) * ibw * z.sex / (72 * c) * crcl_conv;
        var value_abw = (140 - a) * abw * z.sex / (72 * c) * crcl_conv;
        if (bmi < 18.5) {
            Text1(Round(value, 0));
            Text2("肌酐清除率(体重过轻者 BMI " + bmi + ' kg/m<sup>2</sup>)，体重不再进行校正，计算时使用实际体重。');
            $('#res2').hide();
            $('#res3').hide();
        } else if (bmi <= 24.9) {
            Text1(Round(value, 0));
            Text2("肌酐清除率,原始公式。");

            Text3(Round(value_ibw, 0));
            Text4("肌酐清除率(正常体重者)，计算时使用理想体重(" + Round(ibw, 0) + ' kg)。');

            if (value > value_ibw) {
                Text5(Round(value_ibw, 1) + " - " + Round(value, 1));
            } else {
                Text5(Round(value, 1) + " - " + Round(value_ibw, 1));
            }

            Text6("注: 该范围使用理想体重和实际体重,关于使用哪个体重存在争议。");
            $('#res2').show();
            $('#res3').show();

        } else if (bmi >= 25) {
            Text1(Round(value, 0));
            Text2("肌酐清除率,原始公式。");

            Text3(Round(value_abw, 0));
            Text4("肥胖/超重者(正常体重者)，计算时使用校正体重(" + Round(abw, 0) + ' kg)。');

            if (value_ibw > value_abw) {
                Text5(Round(value_abw, 1) + " - " + Round(value_ibw, 1));
            } else {
                Text5(Round(value_ibw, 1) + " - " + Round(value_abw, 1));
            }

            Text6("注: 该范围使用理想体重和校正体重,关于使用哪个体重存在争议。");
            $('#res2').show();
            $('#res3').show();
        }
    } else {
        Text1(Round(value, 0));
        Text2("肌酐清除率,原始公式。");
        $('#res2').hide();
        $('#res3').hide();
    }
}

function changeUnit() {
    if (pref == 'si') {
        $('#cr').attr('placeholder', '62 - 115');
        $('#ht').attr('placeholder', '152 - 213');
    } else if (pref == 'us') {
        $('#cr').attr('placeholder', '0.7 - 1.3');
        $('#ht').attr('placeholder', '60 - 84');
    }
}