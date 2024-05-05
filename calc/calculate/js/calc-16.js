function MDCalc(z) {
    let msg;
    z.lowrisk = $("input[name=lowrisk]:checked").val();
    z.rotateneck = $("input[name=rotateneck]:checked").val();
    if (z.highrisk == 1) {
        if ($("#rotate").is(":visible")) {
            $("#rotate").hide()
        }
        if ($("#low").is(":visible")) {
            $("#low").hide()
        }
        msg = "上述标准并不能确认是否符合颈椎规则。推荐接受影像学检查。"
    } else if (z.highrisk == 0) {
        if ($("#rotate").is(":visible")) {
            $("#rotate").hide()
        }
        $("#low").fadeIn();
        if (z.lowrisk == 0) {
            msg = "上述标准并不能确认是否符合颈椎规则。推荐接受影像学检查。"
        } else if (z.lowrisk == 1) {
            $("#rotate").show();
            if (z.rotateneck == 0) {
                msg = "上述标准并不能确认是否符合颈椎规则。推荐接受影像学检查。"
            } else if (z.rotateneck == 1) {
                msg = "上述标准可以确认符合颈椎规则。无需颈项检查。"
            }
        }
    }
    Text(msg);
}

function showInfo(title, type) {
    var msg = "";
    if (type === 1) {
        msg = '从 ≥ 3英尺 / 5级台阶上跌落，中轴骨载重受伤，高速机动车碰撞/翻滚/弹出，自行车撞击，机动休闲车辆';
    } else if (type === 2) {
        msg = '可以维持坐姿，任何时间都能走动，颈痛延缓，中轴线无压痛，机动车辆后端轻微撞击:(被推进交通车辆中，被大巴/大卡车撞击，翻滚，被高速行驶车辆撞击)';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}

$("#units").hide();