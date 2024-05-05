/**
 * ROMA指数（罗马指数）：是卵巢癌风险预测值正常值0-11.4%。这个指数是通过HE4和CA125计算的。
 * 绝经前预测指数(PI)=-12.0+2.38×LN(HE4)+0.0626×LN(CA125)，
 * 绝经后预测指数(PI)=-8.09+1.04×LN(HE4)+0.732×LN(CA125)，
 * LN表示自然对数，ROMA值=exp(PI)/[1+exp(PI)]×100
 * @param z
 * @constructor
 */
function MDCalc(z) {
    // console.log(z);
    var he4 = z.he4;
    var ca125 = z.ca125;
    var pi1 = -12.0 + 2.38 * Math.log(he4) + 0.0626 * Math.log(ca125);
    var risk1 = Math.exp(pi1) / (1 + Math.exp(pi1));

    var pi2 = -8.09 + 1.04 * Math.log(he4) + 0.732 * Math.log(ca125);
    var risk2 = Math.exp(pi2) / (1 + Math.exp(pi2));

    Answer(Round(risk1 * 100, 1));
    Answer1(Round(risk2 * 100, 1));
}

