function MDCalc(z) {
    let _low = res = z.age + z.hr + z.o2 + z.history + z.trauma + z.hemoptysis + z.estro + z.swelling;
    if (z.low_prob) {
        $("#low_prob-div").show();
        _low > 0 ? Text1("PE 不能排除") : Text1("PE 可排除");
        _low > 0 ? Text2("该规则不适用") : Text2("PE 可能性 < 2%");
    } else {
        Text1("PE 不能排除");
        Text2("该规则不适用");
        if ($("#low_prob-div").is(":visible")) {
            $("#low_prob-div").hide()
        }
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "PE 可能性低") {
        msg = '基于临床经验性评估（使用“Gestalt”或某个临床评分），PE 可能性小于 15%。';
    } else if (title === "心动过速") {
        msg = '心率 ≥ 100 bpm';
    } else if (title === "低氧血症") {
        msg = 'O₂ 饱和度 < 95%';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}