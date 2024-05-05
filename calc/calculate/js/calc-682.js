function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score < 2) {
        Text("可能性：低");
    } else if (score > 6) {
        Text("可能性：高");
    } else {
        Text("可能性：中");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "深静脉血栓临床症状和体征") {
        msg = '单下肢轻度肿胀伴深静脉压痛';
    } else if (title === "活动性恶性肿瘤") {
        msg = '正在治疗、过去 6 月内接受过治疗或姑息性治疗';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}