pref = "us";

function MDCalc(z) {
    var alb_conv = 1;
    var bili_conv = 1;
    if (pref == "si") {
        alb_conv = 1 / 10;
        bili_conv = 1 / 17.1;
    }
    z.alb *= alb_conv;
    z.bili *= bili_conv;
    var growth = 0;
    if (z.growth == 1) {
        growth = 0.667;
    }
    var infant = 0
    if (z.age == 1) {
        infant = 0.436;
    }
    var value = 10 * (0.48 * Math.log(z.bili) + 1.857 * Math.log(z.inr) - 0.687 * Math.log(z.alb) + infant + growth);
    Answer(Round(value, 0));
}

function showInfo(title) {
    var msg = "";
    if (title == "生长延迟") {
        msg = '低于平均水平2个标准差以上为1分，否则为0分。';
    } else if (title == "年龄") {
        msg = '年龄＜1岁为1分（1周岁生日前计算评分并安排在肝移植名单上的儿童，该评分可持续用到满24个月），年龄≥1岁为0分';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}