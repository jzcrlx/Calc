function MDCalc(z) {
    if (z.select1 === 0 && z.select2 === 0 && z.select3 === 0 && z.select4 === 0) {
        Text1("Stage I");
        Text2("82%");
        Text3("55%");
        Text4("Not Reached in the Study");
        Text5("66 Months");
    } else if ((z.select1 === 2 && (z.select3 === 1 || z.select4 === 1))) {
        Text1("Stage III");
        Text2("40%");
        Text3("24%");
        Text4("43 Months");
        Text5("29 Months");
    } else {
        Text1("Stage II");
        Text2("62%");
        Text3("36%");
        Text4("83 Months");
        Text5("42 Months");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "高危的染色体异常") {
        msg = '高危的染色体异常定义为[del（17p）和/或t（4；14）和/或t（14；16）]';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}