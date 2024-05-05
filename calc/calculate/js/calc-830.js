/**
 * 0.666(当发病年龄大于等于50岁）+(0.042x脾脏大小）+1.0956x(当血小板数大于1500)+(0.0584x原始细胞）+0.20399x(当嗜碱性粒细胞大于3%)+(0.0413x嗜酸性粒细胞）x100
 * @param z
 * @constructor
 */
function MDCalc(z) {
    var age = z.age;
    var sp = z.sp;
    var plt = z.plt;
    var bla = z.bla;
    var bas = z.bas;
    var eos = z.eos;
    var score = 0;
    if (age >= 50) {
        score += 0.666;
    }
    score += 0.042 * sp;
    if (plt > 1500) {
        score += 1.0956 * plt;
    }
    score += 0.058 * bla;
    if (bas > 3) {
        score += 0.20399 * bas;
    }
    score += 0.0413 * eos * 100;
    score = Round(score, 0);
    if (score <= 780) {
        $('#risk').show();
        Text1('低风险');
    } else if (score <= 1480) {
        $('#risk').show();
        Text1('中风险');
    } else if (score > 1480) {
        $('#risk').show();
        Text1('高风险');
    } else {
        $('#risk').hide();
    }

    Answer(score);
}

