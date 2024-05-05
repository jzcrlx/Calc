function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score<21) {
        Text("死亡低危");
    }else if(score>29){
        Text(changeColor("死亡高危","red"));
    }else {
        Text("死亡中危");
    }
}
function showInfo(title) {
    var msg = "";
    if (title === "器官功能衰竭") {
        msg = '定义为：<br/>•  肌酐 &gt; 2 mg/dL（177 μmol/L）<br/>•  无尿 &lt; 20 mL/h<br/>•  pO2 &lt; 50 mmHg（6.7 kPa）<br/>•  pCO2 &gt; 50 mmHg（6.7 kPa）<br/>•  休克<br/>•  肠梗阻（肠麻痹 &gt; 24h 或完全性机械性肠梗阻）';
    }

    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}
