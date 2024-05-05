function MDCalc(z) {
    score = 0;
    for (x in z) {
        if (x !== "result") {
            score += z[x]
        }
    }
    Answer(score);
    if (score > 11) {
        msg = "大于等于12分表明即将发生呼吸衰竭，儿童可能需要插管治疗!"
    }
    if (score < 12 && score > 5) {
        msg = "重度哮吼；推荐住院."
    }
    if (score < 6 && score > 2) {
        msg = "中度哮吼."
    }
    if (score < 3) {
        msg = "轻度哮吼."
    }
    msg += "<br/><br/>谨记：<ul><li>Westley哮吼评分尤其用于研究目的，要针对临床体征和症状进行管理.</li><li>考虑该名疑似哮吼症状的患病儿童为细菌性气管炎.</li><li>急诊室内绝大部分儿童(>80%)为轻度哮吼病症，严重哮吼很少（<1%).</li></ul>";
    Text(msg)
}

$("#units").hide();