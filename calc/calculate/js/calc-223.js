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
    if (title == "阶梯式恶化") {
        msg = '指疾病或痴呆发生后，病情停留在一个水平上，然后病情又加重，接着又停留在一个水平上，多见于多次梗塞时。';
    } else if (title == "波动性病程") {
        msg = '指病情好转后又恶化的情况。';
    } else if (title == "身体诉述") {
        msg = '指病人有任何躯体不适的诉述，如头痛、耳鸣、眩晕等。';
    } else if (title == "情感失禁") {
        msg = '指情感的控制能力减弱，易哭、易笑、易怒，但情感的维持时间很短。';
    } else if (title == "中风史") {
        msg = '包括"短暂性脑缺血发作"。';
    } else if (title == "动脉硬化") {
        msg = '主要指冠状动脉、肾动脉、眼底动脉的硬化，ECG、眼底检查或脑血流图检查的证据等。';
    } else if (title == "局灶神经系统症状") {
        msg = '指提示定位性的神经系统症状。';
    } else if (title == "局灶神经系统体征") {
        msg = '指提示定位性的神经系统体征。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}