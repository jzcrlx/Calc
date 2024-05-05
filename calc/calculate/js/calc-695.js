function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 3) {
        Text(changeColor("再酗酒高危", "red"));
    } else {
        Text("再酗酒低危");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "每日饮酒次数") {
        msg = '1 次饮酒 = 12 g 乙醇摄入';
    } else if (title === "既往治疗次数") {
        msg = '因酗酒而住院治疗';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}