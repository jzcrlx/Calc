function MDCalc(z) {
    //console.log(z);
    let stopnow = z.gcs + z.skull + z.ams;
    let res;
    if (stopnow === 0) {
        if (z.agegroup === 0) {
            if ($("#age1").is(":visible")) {
                $("#age1").hide()
            }
            $("#age0").show();
            res = z.hematoma + z.loc + z.sevmech + z.notnormal;
        } else {
            if ($("#age0").is(":visible")) {
                $("#age0").hide()
            }
            $("#age1").show();
            res = z.loc2 + z.vomiting + z.sevmech2 + z.headache;
        }
    } else {
        if ($("#age0").is(":visible")) {
            $("#age0").hide()
        }
        if ($("#age1").is(":visible")) {
            $("#age1").hide()
        }
        res = 50;
    }
    if (res === 50) {
        Text("<span style='color:green'>推荐进行 CT 检查</span>");
    } else if (res === 0) {
        Text("<span style='color:red'>不推荐进行 CT 检查</span>");
    } else {
        Text("观察 vs. CT");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "异常 GCS") {
        msg = 'Glasgow 昏迷评分（GCS）小于 15 分';
    } else if (title === "精神状态改变表现") {
        msg = '符合以下任意一项： • 焦虑 • 嗜睡 • 反复性的问题 • 语言交流中反应迟钝';
    } else if (title === "严重的致伤机制") {
        msg = '定义为： • 机动车撞击致患者被抛出、同行人员的死亡、或翻滚 • 步行或未戴头盔骑自行车时受到机动车撞击 • 从 1.5 m （5 英尺）或更高的高度跌落 • 或头部受到高冲击力物体的撞击';
    } else if (title === "LOC 持续 ≥ 5 秒") {
        msg = 'LOC = 意识丧失';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
