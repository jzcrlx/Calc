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
    if (title == "至少 3 个关节区的关节炎") {
        msg = '关节肿痛涉及双侧近端指间关节、掌指关节、腕关节、肘关节、跖趾关节、踝关节、膝关节共 14 个关节区中至少 3个区 （≥6 周）';
    } else if (title == "对称性关节炎") {
        msg = '同时出现左右两侧的对称性关节炎（近端指间关节、掌指关节及跖趾关节不要求完全对称）（≥6 周）';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}