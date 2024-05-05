function MDCalc(z) {
    if (z.cvd === 1 || (z.mvd === 1 || (z.age === 0 || (z.age === 1 || (z.age === 2 && z.duration === 1))))) {
        Text1("是");
    } else {
        Text1("否");
    }

    if (z.cvd === 1 || (z.mvd === 1 || (z.age === 0 && z.risk === 1))) {
        Text2("是");
    } else {
        Text2("否");
    }

    if (z.cvd === 1) {
        Text3("是");
    } else {
        Text3("不定期推荐");
    }

    if (z.cvd === 1 && z.type === 1 && z.a1c === 1) {
        Text4("是");
    } else {
        Text4("否");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "心血管疾病") {
        msg = '• 心绞痛；既往心肌梗死；既往PTCI；既往CABG <br/>• 外周动脉疾病：间歇性跛行，外周血管搭桥术 <br/>• 脑血管病：短暂性脑缺血发作，脑血管意外';
    } else if (title === "微血管疾病") {
        msg = '视网膜病变 <br/>• 肾脏病变：ACR升高，eGFR降低 <br/>• 神经病变';
    } else if (title === "患者是否至少有1个以下危险因素") {
        msg = '• 总胆固醇>5.2 mmol/L <br/>• 高密度脂蛋白胆固醇<0.9mmol/L <br/>• 高血压 <br/>• 蛋白尿 <br/>• 吸烟';
    } else if (title === "他汀类药物推荐") {
        msg = '即使基线血压或LDL-C处于目标水平，也推荐使用。调整剂量或额外的脂质治疗保证如果脂质目标(低密度< 2.0更易与t / L)否得到满足。警告:潜在的胚胎病-中止之前受孕。尽量达到加拿大心血管协会指南的目标，开出最大限度的耐受和批准剂量。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}