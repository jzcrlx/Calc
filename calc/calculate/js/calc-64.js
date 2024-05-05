function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    var msg;
    Answer(score);
    if (score < 51) {
        msg = "危险级别 I， 死亡率0.1-0.4%。门诊治疗，除非有其他影响治疗的因素。";
    } else if (score > 50 && score < 71) {
        msg = "危险级别 II， 死亡率0.6-0.7%。门诊治疗，除非有其他影响治疗的因素。";
    } else if (score > 70 && score < 91) {
        msg = "危险级别 III， 死亡率 0.9-2.8%。 根据临床判断进行门诊或住院治疗。";
    } else if (score > 90 && score < 131) {
        msg = "危险级别 IV, 死亡率 >2.8%. 根据危险推荐住院。";
    } else if (score > 130) {
        msg = "危险级别 IV， 死亡率 >>2.8%。 根据危险推荐住院 。";
    }
    Text(msg);
}