function MDCalc(z) {
    /*if (pref == "si") {
        wt_conv = 1;
        ht_conv = 1;
    } else if (pref == "us") {
        wt_conv = 1 / 2.2;
        ht_conv = 2.54;
    }
    z.wt *= wt_conv;
    z.ht *= ht_conv;
    //体表面积
    value2 = z.wt * z.ht / 3600;
    value2 = Math.pow(value2, .5);
    Answer2(Round(value2, 2));*/
    //BMI
    htinmeters = z.ht / 100;
    value = z.wt / Math.pow(htinmeters, 2);
    value = Round(value, 1);
    Answer(value);
    if (value >= 28) {
        Text("肥胖");
        Text3("狂风中，不动如山。虽然生命的分量很重，但为了健康，还请多多运动哦~");
    } else if (value >= 24) {
        Text("超重");
        Text3("虽说心宽体胖，但瘦一点会貌比潘安哦~");
    } else if (value >= 18.5) {
        Text("正常范围");
        Text3("秾纤得衷，修短合度，体态适中，还请继续保持哦~");
    } else if (value < 18.5) {
        Text("偏瘦");
        Text3("虽已是腰细惊风，细柳生姿，但也要注意健康哦~");
    } else {
        Text("");
        Text3("");
    }

    if (value >= 40) {
        Text2("肥胖: III类肥胖");
    } else if (value >= 35) {
        Text2("肥胖: II类肥胖");
    } else if (value >= 30) {
        Text2("肥胖: I类肥胖");
    } else if (value >= 25) {
        Text2("超重: 肥胖前期");
    } else if (value >= 18.5) {
        Text2("正常范围");
    } else if (value < 18.5) {
        Text2("过轻");
    } else {
        Text2("");
    }

    $('.msg').show();
}