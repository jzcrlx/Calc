function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score<=1) {
        Text("ICU 死亡中危");
    }else if(score===2){
        Text(changeColor("ICU 死亡高危","red"));
    }else {
        Text(changeColor("ICU 死亡极高危","red"));
    }
}
function showInfo(title) {
    var msg = "";
    if (title === "合并症") {
        msg = '包括： • COPD • 免疫减退 • 慢性心力衰竭 • 慢性肝病 • 慢性肾衰';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
