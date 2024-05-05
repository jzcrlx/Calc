function MDCalc(z) {
    // console.log(z);
    let major = z.bloodculture + z.endocardial;
    let minor = z.predisp + z.fever + z.vascular + z.immune + z.microbio;
    if (major > 0) {
        if (major == 1) {
            if (minor > 0) {
                if (minor + major <= 3) {
                    Text3("感染性心内膜炎可能");
                } else {
                    Text3("符合诊断");
                }
            } else {
                Text3("不符合诊断");
            }
        } else {
            Text3("符合诊断");
        }
    } else {
        if (minor >= 3) {
            if (minor == 5) {
                Text3("符合诊断");
            } else {
                Text3("感染性心内膜炎可能");
            }
        } else {
            Text3("不符合诊断");
        }
    }
    Text1(changeColor(major + "项主要标准", "#fc993d"));
    Text2(changeColor(minor + "项次要标准", "#fc993d"));
}

function showInfo(title) {
    var msg = "";
    if (title === "感染性心内膜炎血培养阳性") {
        msg = '2 次独立血培养均发现下述典型的感染性心内膜炎致病菌之一： 草绿色链球菌，或牛链球菌，或HACEK 菌群，或社区获得的无原发病灶的金黄色葡萄球菌或肠球菌<br/>感染性心内膜炎致病菌持续血培养阳性（持续性菌血症）定义为： 2 次间隔超过12小时的血培养结果阳性，或3次独立血培养均阳性或4次独立血培养中大多数结果阳性（其中第一次与最后一次采血间隔超过1小时）<br/> 至少一次阳性血培养结果中检测到贝氏柯克斯体（Coxiella bur etii）或反相 I 型 IgG 抗体滴度 > 1:800';
    } else if (title === "心内膜受累的证据") {
        msg = '可活动的心内赘生物附着于瓣膜或其支持结构、在返流的路径上、或在植入物表面，或脓肿，或新出现的人工瓣膜裂缝或新的瓣膜反流（原有的杂音加重或改变不足以达到标准）';
    } else if (title === "易患因素") {
        msg = '心脏易患因素或静脉药瘾者';
    } else if (title === "发热") {
        msg = '体温 > 38 °C（100.4 °F）';
    } else if (title === "血管现象") {
        msg = '• 大动脉栓塞<br/>• 脓毒性肺梗死<br/>• 霉菌性动脉瘤<br/>• 颅内出血<br/>• 结膜出血<br/>• Ja eway 病损';
    } else if (title === "免疫现象") {
        msg = '• 肾小球肾炎<br/>• Osler 结节<br/>• Roth 斑<br/>• 类风湿因子';
    } else if (title === "微生物学证据") {
        msg = '血培养阳性但不足以满足主要标准，或感染性心内膜炎致病微生物活动性感染的血清学证据';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}