function MDCalc(z) {
    var max = z.atm - z.paco2;
    var min = z.pao2 - z.atm2;
    if (max + min == 0) {
        Answer("分母为0,无法计算");
    } else {
        value = (max - min) / ((max + min) / 2);
        Answer(Math.round(parseFloat(value) * 100))
    }
}