function MDCalc(z) {
    //console.log(z);
    let inclusion = ((z.inc_1 + z.inc_2 + z.inc_3 + z.inc_4 + z.inc_5 + z.inc_6) > 5) ? 1 : 0;
    let high = z.high_1 + z.high_2 + z.high_3 + z.high_4;
    let med = z.med_1 + z.med_2 + z.med_3;
    let msg;
    if (inclusion > 0) {
        $(".hide-div").show();
        if (high > 0) {
            msg = "需要 CT 检查（高危）";
        } else {
            if (med > 0) {
                msg = "需要 CT 检查（中危）";
            } else {
                msg = "无需行 CT 检查";
            }
        }
    } else {
        if ($(".hide-div").is(":visible")) {
            $(".hide-div").hide()
        }
        msg = "不适用";
    }
    Text(msg);
}

function showInfo(title) {
    var msg = "";
    if (title === "持续呕吐或持续躁动") {
        msg = '持续呕吐（一次以上）或持续躁动（2 岁以下儿童）';
    } else if (title === "颅底骨折体征") {
        msg = '如鼓室出血、「熊猫」眼、耳漏或鼻漏、Battle 征';
    } else if (title === "危险机制") {
        msg = '如撞车、从高于1米处或5级台阶以上跌落、未戴头盔从自行车上摔倒';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
