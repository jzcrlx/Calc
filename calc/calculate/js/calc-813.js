function MDCalc(z) {
    // console.log(z)
    let result = z.select1 + z.select2 + z.select3 + z.select4 + z.select5;
    let ageFactor = (z.age - 70) * (0.05 - (result * 0.005));
    result += ageFactor;
    Answer(Math.round(result * 10.0) / 10.0);
    let alertMsg1, alertMsg2;
    if (result <= 1.5) {
        alertMsg1 = "极低风险";
        alertMsg2 = "8.8 年";
    } else if (result <= 3) {
        alertMsg1 = "低风险";
        alertMsg2 = "5.3 年";
    } else if (result <= 4.5) {
        alertMsg1 = "中风险";
        alertMsg2 = "3.0 年";
    } else if (result <= 6) {
        alertMsg1 = "高风险";
        alertMsg2 = "1.6 年";
    } else {
        alertMsg1 = "极高风险";
        alertMsg2 = "0.8 年";
    }
    Text1(alertMsg1);
    Text2(alertMsg2);
}

function showInfo(title) {
    var msg = "";
    if (title === "染色体核型") {
        msg = '【染色体核型定义: 极好: -Y, 11q- 好: 正常核型, 5q-, 20q-, 12p-, 5q-附加另一种核型异常 中等: 7q-, +8, +19, i(17q), 其他1个或2个独立克隆的染色体异常 差: -7, inv(3)/t(3q)/del(3q), -7/del(7q)附加另一种核型异常, 复杂异常(3个) 极差: 复杂异常(>3个)】'
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
    return true;
}