function MDCalc(z) {
   //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
}
function showInfo(title) {
    var msg = "";
    if (title == "器质性脑病综合征") {
        msg = '智力的改变伴定向力、记忆力或其他智力功能的损害并出现反复不定的临床症状，至少同时有以下两项：感觉紊乱、不连贯的松散语言、失眠或白天瞌睡、精神运动性活动增加或减少。除外感染、代谢、药物所致';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}