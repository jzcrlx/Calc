function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score >= 3) {
        Text(changeColor("高危", "red"));
    } else {
        Text("低危");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "活动性癌症") {
        msg = '局部或远处转移癌症患者和/或 6 月内接收过放、化疗。';
    } else if (title === "既往静脉血栓栓塞史") {
        msg = '既往肺栓塞或深静脉血栓史，并排除浅静脉血栓。';
    } else if (title === "活动受限") {
        msg = '除上卫生间外持续卧床 3 天以上（无论患者自身限制所致或医生要求）';
    } else if (title === "血栓形成易化条件") {
        msg = '抗凝血酶缺陷、蛋白 C 或蛋白 S 突变、Leide V 因子突变、G20210A 凝血酶原突变，抗磷脂抗体综合征患者。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}