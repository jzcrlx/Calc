function MDCalc(z) {
    //console.log(z);
    var score = 0;
    var alertStrings1;
    var alertStrings2;
    var alertStrings3;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score == 0) {
        alertStrings1 = "Very Good";
        alertStrings2 = "94 %";
        alertStrings3 = "94 %";
    } else if (score == 1) {
        alertStrings1 = "Good";
        alertStrings2 = "80 %";
        alertStrings3 = "79 %";
    } else if (score == 2) {
        alertStrings1 = "Good";
        alertStrings2 = "80 %";
        alertStrings3 = "79 %";
    } else if (score == 3) {
        alertStrings1 = "Poor";
        alertStrings2 = "53 %";
        alertStrings3 = "55 %";
    } else {
        alertStrings1 = "Poor";
        alertStrings2 = "53 %";
        alertStrings3 = "55 %";
    }
    Answer(score);
    Text1(alertStrings1);
    Text2(alertStrings2);
    Text3(alertStrings3);
}
function showInfo(title) {
    var msg = "";
    if (title === "活动状态") {
        msg = 'ECOG状态：0-患者无症状，1-患者有症状但可自由走动，2-患者日间不超过一半时间卧床，3-患者日间一半以上时间卧床，4-患者长期卧床，日常生活活动需要依赖他人';
    } else if (title === "Estimated Overall Survival") {
        msg = 'Prior to rituximab, the IPI scoring system would have identified this risk group as "low" risk, with predicted 5-year survival of 73%.';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}