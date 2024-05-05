function MDCalc(z) {
    // console.log();
    var score = 0;
    var zhuyao = z.zhuyao1 + z.zhuyao2 + z.zhuyao3 + z.zhuyao4;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (zhuyao >= 2 && score >= 5) {
        Text(changeColor("排除感染性疾病、恶性肿瘤和其他风湿病后，可以诊断成人still病", "red"));
    } else {
        Text("不足以诊断成人still病");
    }
}
