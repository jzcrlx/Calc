function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 0) {
        Text("不适宜院外治疗");
    } else {
        Text("可以院外治疗");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "血流动力学不稳定") {
        msg = '包括下列几项标准：<br/>•  收缩压 < 100 mmHg<br/>•  伴 HR > 100 bpm<br/>•  需收治 ICU';
    } else if (title === "需要栓子碎除") {
        msg = '溶栓治疗或栓子清除是否必要？';
    } else if (title === "出血情况") {
        msg = '活动性出血或高出血风险，包括：<br/>•  过去 14 天内胃肠道出血<br/>•  近期脑卒中（< 4 周）<br/>•  近期手术（< 2 周）<br/>•  出凝血异常<br/>•  血小板减少症（< 75 x 10⁹/L)<br/>•  未控制的高血压（收缩压 > 180 mmHg 或舒张压 > 110 mmHg）';
    } else if (title === "需要氧气") {
        msg = '是否需要超过 24 小时的氧气支持以维持氧饱和度 > 90%？';
    } else if (title === "接收抗凝治疗中") {
        msg = '是否在抗凝治疗过程中出现的肺栓塞？';
    }else if (title === "剧痛") {
        msg = '是否存在需要静脉镇痛药物支持超过 24 小时的剧痛？';
    }else if (title === "需要住院") {
        msg = '导致院内治疗超过 24 小时的医学或社会原因（感染、恶性肿瘤、缺乏基础支援...）？';
    }else if (title === "肾衰竭") {
        msg = '患者肌酐清除率是否小于 30 mL/mi ？';
    }else if (title === "肝病") {
        msg = '患者是否存在严重的肝损？';
    }else if (title === "妊娠") {
        msg = '患者是否处于妊娠状态？';
    }else if (title === "明确的 HIT") {
        msg = '患者是否存在明确的肝素诱导的血小板减少症（HIT）病史？';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}