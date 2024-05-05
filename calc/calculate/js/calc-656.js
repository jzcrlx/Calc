function MDCalc(z) {
    // console.log(z);
    let major = z.carditis + z.arthritis + z.chorea + z.nodules + z.marginatum;
    let minor = z.fever + z.arthralgia + z.crp + z.int + z.prev;
    if (z.strep) {
        if (major >= 2) {
            Text3("ARF有可能");
        } else {
            if (major >= 1) {
                if (minor >= 2) {
                    Text3("ARF有可能");
                } else {
                    Text3("ARF不可能");
                }
            } else {
                Text3("ARF不可能");
            }
        }
    } else {
        Text3("ARF不可能");
    }
    Text1(changeColor(major + "项主要标准", "#fc993d"));
    Text2(changeColor(minor + "项次要标准", "#fc993d"));
}

function showInfo(title) {
    var msg = "";
    if (title === "多关节炎") {
        msg = '游走性关节炎，主要累及膝关节、踝关节、肘关节和腕关节等。';
    } else if (title === "Sydenham 舞蹈征") {
        msg = '突然发作的、无目的的活动。这可以是 ARF 仅有的临床表现，并且具有诊断意义。';
    } else if (title === "发热") {
        msg = '38.2 - 38.9 °C 101 - 102 °F';
    } else if (title === "急性期反应物升高") {
        msg = '血沉（ESR）、C-反应蛋白（CRP）及白细胞等升高';
    } else if (title === "感染证据") {
        msg = '近期 A 组链球菌感染证据：  <br/>• 抗链球菌溶血素 O 抗体或其他链球菌抗体升高  <br/>• 咽拭子培养 A 组 β-溶血性链球菌阳性  <br/>• 快速直接 A 组链球菌糖类抗原试验阳性  <br/>• 近期患猩红热';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}