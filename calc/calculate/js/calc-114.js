function MDCalc() {

}

function calc(projectId, data) {
    var sex = data.sex;
    var age = data.age;
    var alt = data.alt;
    var hbeag = data.hbeag;
    var hbv = data.hbv;
    if (!sex || !age || !alt || !hbeag || !hbv) {
        layer.open({
            content: '选项不能为空',
            time: 2,
            skin: 'msg',
            anim: 'scale'
        });
        return;
    }
    var score = Number(sex) + Number(age) + Number(alt) + Number(hbeag) + Number(hbv);
    var data_bar = [0.0, 0.0, 0.0];
    switch (score) {
        case 0:
            data_bar = [0.0, 0.0, 0.0];
            break;
        case 1:
            data_bar = [0.0, 0.0, 0.1];
            break;
        case 2:
            data_bar = [0.0, 0.0, 0.1];
            break;
        case 3:
            data_bar = [0.0, 0.1, 0.2];
            break;
        case 4:
            data_bar = [0.0, 0.1, 0.3];
            break;
        case 5:
            data_bar = [0.1, 0.2, 0.5];
            break;
        case 6:
            data_bar = [0.1, 0.3, 0.7];
            break;
        case 7:
            data_bar = [0.2, 0.5, 1.2];
            break;
        case 8:
            data_bar = [0.3, 0.8, 2.0];
            break;
        case 9:
            data_bar = [0.5, 1.2, 3.2];
            break;
        case 10:
            data_bar = [0.9, 2.0, 5.2];
            break;
        case 11:
            data_bar = [1.4, 3.3, 8.4];
            break;
        case 12:
            data_bar = [2.3, 5.3, 13.4];
            break;
        case 13:
            data_bar = [3.7, 8.5, 21.0];
            break;
        case 14:
            data_bar = [6.0, 13.6, 32.0];
            break;
        case 15:
            data_bar = [9.6, 21.3, 46.8];
            break;
        case 16:
            data_bar = [15.2, 32.4, 64.4];
            break;
        case 17:
            data_bar = [23.6, 47.4, 81.6];
            break;
    }
    var data = {
        score: score,
        data: data_bar
    };

    window.location.href = encodeURI("calc-114-result.html?data=" + JSON.stringify(data));
}