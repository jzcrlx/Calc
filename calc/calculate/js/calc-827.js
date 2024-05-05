function MDCalc(z) {
    // console.log(z);
    //log
    var sex = z.sex;
    var age = z.age;
    var sbp = z.sbp;
    var tc = z.tc;
    var hdl = z.hdl;
    var waist = z.waist;
    //a6
    var smoke = z.smoke;
    var dm = z.dm;
    var place = z.place;
    var city = z.city;
    var ascvd = z.ascvd;
    //男
    var risk = 0;
    if (sex == 1) {
        //log 自然对数
        var value = 31.97 * Math.log(age) + 26.15 * Math.log(sbp) + 0.62 * Math.log(tc) - 0.69 * Math.log(hdl) - 0.71 * Math.log(waist) + 3.96 * smoke + 0.36 * dm +
            0.48 * place - 0.16 * city + 6.22 * ascvd - 5.73 * Math.log(age) * Math.log(sbp) - 0.94 * Math.log(age) * smoke - 1.53 * Math.log(age) * ascvd;
        var num1 = value - 140.68;
        //Math.exp() 函数返回 e<sup>x</sup>，x 表示参数，e 是欧拉常数
        var num2 = Math.exp(num1);
        //0.9707 num2 次方
        risk = 1 - Math.pow(0.9707, num2);
    } else {
        //女
        var value = 24.87 * Math.log(age) + 19.98 * Math.log(sbp) + 0.06 * Math.log(tc) - 0.22 * Math.log(hdl) + 1.48 * Math.log(waist) + 0.49 * smoke + 0.57 * dm +
            0.54 * place - 4.36 * Math.log(age) * Math.log(sbp);
        var num1 = value - 117.26;
        var num2 = Math.exp(num1);
        risk = 1 - Math.pow(0.99, num2);
    }

    Answer(Round(risk * 100, 3));
    var msg1 = "";
    var msg2 = "";
    if (risk < 0.05) {
        msg1 = changeColor('<b>低危,风险<5.0%</b>', 'green');
    } else if (risk >= 0.05 && risk < 0.1) {
        msg1 = changeColor('<b>中危,风险5.0%~9.9%</b>', '#fc993d');
    } else if (risk > 0.1) {
        msg1 = changeColor('<b>高危,风险≥10.0%</b>', 'red');
    }

    Text1(msg1);
}

$(document).ready(function () {
    $("#age").blur(function () {
        var age = $(this).val();
        if (age < 20) {
            layer.open({
                title: '提示',
                content: '<div style="text-align: justify">仅适用于20岁及以上无心血管疾病的居民</div>',
                btn: '确定'
            });
            $('.answer_block').hide();
        } else {
            $('.answer_block').show();
        }
    });
});

