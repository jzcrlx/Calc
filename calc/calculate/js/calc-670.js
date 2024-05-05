function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score > 0) {
        Text("有头颅 CT 指征");
    } else {
        Text("无需头颅 CT");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "GCS 下降") {
        msg = 'Glasgow 昏迷评分低于 15 分';
    } else if (title === "持续的顺行性遗忘") {
        msg = '短暂性记忆障碍';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
