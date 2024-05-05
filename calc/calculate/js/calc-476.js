function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result" && key !== "age") {
            score += z[key];
        }
    }
    Answer(score);
    if(z.age!=null){
        Answer1(score + z.age);
    }
}

function showInfo(title) {
    var msg = "";
    if (title == "发热") {
        msg = '> 38°C / > 100.4°F';
    } else if (title == "年龄") {
        msg = '年龄仅用于 McIsaac 评分';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}