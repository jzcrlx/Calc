function MDCalc(z) {
    var score = 0;
    if (z.time == 0) {
        time = 1;
    } else {
        time = 2;
    }
    score = time * z.limb + z.injury + z.shock + z.age;
    Answer(score);
}
function showInfo(title) {
    var msg = "";
    if (title == "肢体局部缺血") {
        msg = '肢体局部缺血超过6小时,此项分数加倍';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}