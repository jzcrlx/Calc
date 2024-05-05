function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score >21) {
        Text(changeColor("高危患者", "red"));
    } else {
        Text("低危患者");
    }
}
function showInfo(title) {
    var msg = "";
    if (title == "COPD") {
        msg = '慢性阻塞性肺病';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}