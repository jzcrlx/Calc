function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 1.5) {
        Text("致命性出血低危");
    } else if (score > 4) {
        Text(changeColor("致命性出血高危", "red"));
    } else {
        Text("致命性出血中危");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "制动 ≥ 4 天") {
        msg = '定义为非手术患者诊断出静脉血栓栓塞（VTE）之前 2 月内除洗漱外长期卧床 ≥ 4 天。';
    } else if (title === "近期发生大出血") {
        msg = '诊断出静脉血栓栓塞（VTE）之前 30 天内发生过大出血。';
    } else if (title === "血小板减少症") {
        msg = '血小板计数 < 100 x 10⁹/L';
    } else if (title === "贫血") {
        msg = '定义为男性血红蛋白 < 13 g/dL，女性血红蛋白 < 12 g/dL。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}