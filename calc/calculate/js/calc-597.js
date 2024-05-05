function MDCalc(z) {
    var score = allCheckbox(z) + age();
    if (score != 0) {
        var addX = Math.exp(accAdd(-4.789594, score));
        var n = accDiv(addX, (1 + addX)) * 100;
        Answer(Round(n, 2));
    } else {
        Answer(0);
    }
}

//两小数相加
function accAdd(num1, num2) {
    var r1, r2, m;
    try {
        r1 = num1.toString().split('.')[1].length;
    } catch (e) {
        r1 = 0;
    }
    try {
        r2 = num2.toString().split(".")[1].length;
    } catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return Math.round(num1 * m + num2 * m) / m;
}

//两小数相除
function accDiv(num1, num2) {
    var t1, t2, r1, r2;
    try {
        t1 = num1.toString().split('.')[1].length;
    } catch (e) {
        t1 = 0;
    }
    try {
        t2 = num2.toString().split(".")[1].length;
    } catch (e) {
        t2 = 0;
    }
    r1 = Number(num1.toString().replace(".", ""));
    r2 = Number(num2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}

function allCheckbox(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result" && key !== "age") {
            score += z[key];
        }
    }
    return score;
}

function age() {
    var age = 0;
    if ($('#age').val() != '') {
        var v = parseInt($('#age').val());
        var n = 0;
        n = v;
        age = age + n;
        if ((age - 59) <= 0) {
            age = 1;
        } else {
            age = (age - 59) + 1;
        }
    }
    return age * 0.0666354;
}

function showInfo(title) {
    var msg = "";
    if (title == "慢性肺疾病") {
        msg = '需要长期使用支气管扩张或激素';
    } else if (title == "心外动脉系统疾病") {
        msg = '跛行；颈动脉阻塞或狭窄>50%；曾计划治疗腹主动脉疾病；其他四肢动脉或颈动脉疾病';
    } else if (title == "神经系统功能障碍") {
        msg = '严重运动障碍或影响日常生活';
    } else if (title == "术前病情危急") {
        msg = '室速、室颤、心跳骤停；术前心脏按摩；术前即需机械通气；术前需使用正性肌力药物；IABP；术前急性肾衰（无尿或少尿<10ml/Hr）';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}