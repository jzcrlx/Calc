function MDCalc() {

}

function saveLog(projectId, data) {
    $.get('calc/resultLog/' + projectId, {data: data, id: 'calc-115'});
}

function calc(projectId, data) {
    var sex = data.sex;
    var age = data.age;
    var alt = data.alt;
    var hbeag = data.hbeag;
    var ls = data.ls;
    if (!sex || !age || !alt || !hbeag || !ls) {
        layer.open({
            content: '选项不能为空',
            time: 2,
            skin: 'msg',
            anim: 'scale'
        });
        return;
    }
    var score = Number(sex) + Number(age) + Number(alt) + Number(hbeag) + Number(ls);

    if (score < 10) {
        //低风险
        $('.divShowImg').show();
        $('#low_risk').show();
        $('#high_risk').hide();
    } else if (score >= 10) {
        //高风险
        $('.divShowImg').show();
        $('#low_risk').hide();
        $('#high_risk').show();
    }    
    document.getElementsByClassName('showScore')[0].textContent = '肝癌发生风险评分: ' + score + '分';
    document.getElementsByClassName('showScore')[1].textContent = '肝癌发生风险评分: ' + score + '分';
    $("html,body").animate({ scrollTop: $('.divShowImg').offset().top}, 50);
    saveLog(projectId, '查看结果评分:' + score);

}