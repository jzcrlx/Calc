function MDCalc(z) {
    //console.log(z);
    let _inc = z.inc1 + z.inc2 + z.inc3;
    let _exc = z.exc1 + z.exc2 + z.exc3 + z.exc4;
    let _var = z.var1 + z.var2 + z.var3 + z.var4 + z.var5 + z.var6;
    let res;
    if (_inc > 2) {
        res = "排除标准";
        $("#exc-div").show();
        if (_exc < 1) {
            $("#var-div").show();
            if (_var > 0) {
                res = "需要进一步排查 SAH";
            } else {
                res = "SAH 可排除";
            }
        } else {
            res = "本规则不适用";
            if ($("#var-div").is(":visible")) {
                $("#var-div").hide()
            }
        }
    } else {
        res = "该规则不适用";
        if ($("#exc-div").is(":visible")) {
            $("#exc-div").hide()
        }
        if ($("#var-div").is(":visible")) {
            $("#var-div").hide()
        }
    }
    Text(res);
}
function showInfo(title) {
    var msg = "";
    if (title === "反复头痛病史") {
        msg = '定义为超过 6 个月的时间内有 ≥ 3 次的发作';
    } else if (title === "雷击样头痛") {
        msg = '定义为突发剧烈疼痛';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
