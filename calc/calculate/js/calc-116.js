function MDCalc() {

}

function saveLog(projectId, data) {
    $.get('calc/resultLog/' + projectId, {data: data, id: 'calc-116'});
}

function showInfo(title, no) {
    var msg = "";
    if (no == 1) {
        msg = '感染HBV的标志，也是判断体内是否存在乙肝病毒的标准。还是乙肝疫苗的主要成分。一般在感染HBV后2-6个月，血清中出现HBsAg（+）。';
    } else if (no == 2) {
        msg = '保护性IgG，是判断体内是否具有HBV保护性抗体的标志。HBsAb阳性一般表明既往感染过乙型肝炎病毒，或者接种过乙肝肝炎疫苗并产生抗体。';
    } else if (no == 3) {
        msg = 'HBV复制活跃的标志。它的存在说明了HBV在体内复制活跃，传染性强。一般来说若HBeAg持续阳性3个月以上，表示疾病有慢性化倾向。';
    } else if (no == 4) {
        msg = '由HBeAg刺激产生的特异性抗体，可与HBeAg特异性结合。HBeAb是判断病毒复制是否受到抑制的标志。当其阳性时表明HBV复制低、传染性减少。';
    } else if (no == 5) {
        msg = '机体感染HBV后在血液中最早出现的特异抗体，是判断急性乙型肝炎的重要指标。其持续阳性可以是急性肝炎转为慢性或者HBV复制活跃的提示。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}

function calc(projectId, data) {
    var hbsag = data.hbsag;
    var hbsab = data.hbsab;
    var hbeag = data.hbeag;
    var hbeab = data.hbeab;
    var hbcabigg = data.hbcabigg;
    var hbcabigm = data.hbcabigm;
    //默认阴性
    if (!hbcabigm) {
        hbcabigm = 0;
    }
    if (!hbsag || !hbsab || !hbeag || !hbeab || !hbcabigg) {
        layer.open({
            content: '选项不能为空',
            time: 2,
            skin: 'msg',
            anim: 'scale'
        });
        return;
    }
    var res = '易感。';
    var res2 = '因接种乙型肝炎疫苗而免疫。';
    var res25 = '既往感染过乙肝病毒，已免疫。';
    var res156 = '急性感染。';
    var res15 = '慢性感染。';
    var res5 = '原因未明，可能存在以下4种情况：<br>1. 最常见于HBV感染已恢复<br>2. 抗-HBc假阳性，易感<br>3. 低水平慢性感染<br>4. 急性感染恢复期';

    var resOther = '此检验结果较少见，请参考临床实际情况进行判断。';

    var value = getValue([hbsag, hbsab, hbeag, hbeab, hbcabigg, hbcabigm]);

    var flag = getValue([1, 1, 1, 1, 1, 1]);
    //忽略第6项
    var flag6 = getValue([1, 1, 1, 1, 1, 0]);
    //忽略第3,4项
    var flag34 = getValue([1, 1, 0, 0, 1, 1]);
    var f = value & flag;
    var f2 = value & flag6;
    var f3 = value & flag34;

    var v25 = getValue([0, 1, 0, 0, 1, 0]);
    var v2 = getValue([0, 1, 0, 0, 0, 0]);
    var v156 = getValue([1, 0, 0, 0, 1, 1]);
    var v15 = getValue([1, 0, 0, 0, 1, 0]);
    var v5 = getValue([0, 0, 0, 0, 1, 0]);

    //console.log(value, flag, data);

    $('#resultmsg').html(getAns(data));
    if (value == 0 || f2 == 0) {
        $('#resultmsg2').html(res);
    } else if (f2 == v25) {
        $('#resultmsg2').html(res25);
    } else if (f2 == v2) {
        $('#resultmsg2').html(res2);
    } else if (f3 == v156) {
        $('#resultmsg2').html(res156);
    } else if (f3 == v15) {
        if (!data.hbcabigm) {
            $('#resultmsg2').html(resOther);
        } else {
            $('#resultmsg2').html(res15);
        }
    } else if (f2 == v5) {
        $('#resultmsg2').html(res5);
    } else {
        $('#resultmsg2').html(resOther);
    }
    $('.prompt_box').show();
}

function getValue(arr) {
    var res = 0;
    for (var i = 0; i < arr.length; i++) {
        res += arr[i] * Math.pow(2, 5 - i);
    }
    return res;
}

function getAns(data) {
    //<br>HBsAg: 阴性，抗-HBs: 阴性<br>HBeAg: 阴性，抗-HBe: 阴性<br>抗-HBc IgG: 阴性，抗-HBc IgM: 阴性
    var res = "HBsAg: ";
    if (data.hbsag == 1) {
        res += changeColor('阳性', 'red');
    } else {
        res += '阴性';
    }
    res += '，抗-HBs: ';
    if (data.hbsab == 1) {
        res += changeColor('阳性', 'red');
    } else {
        res += '阴性';
    }

    res += '<br>HBeAg: ';
    if (data.hbeag == 1) {
        res += changeColor('阳性', 'red');
    } else {
        res += '阴性';
    }
    res += '，抗-HBe: ';
    if (data.hbeab == 1) {
        res += changeColor('阳性', 'red');
    } else {
        res += '阴性';
    }
    res += '<br>抗-HBc: ';
    if (data.hbcabigg == 1) {
        res += changeColor('阳性', 'red');
    } else {
        res += '阴性';
    }
    res += '，抗-HBc IgM: ';
    if (data.hbcabigm == 1) {
        res += changeColor('阳性', 'red');
    } else if (data.hbcabigm == 0) {
        res += '阴性';
    } else {
        res += '未检测';
    }
    return res;
}
