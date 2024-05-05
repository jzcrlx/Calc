/**
 ALBI = (log10 胆红素 × 0.66) + (白蛋白 × -0.085), 胆红素单位:μmol/L , 白蛋白单位:g/L.
 * @param z
 * @constructor
 */
function MDCalc(z) {
    var bili = z.bili;
    var alb = z.alb;
    var score = Math.log10(bili) * 0.66 + (alb * -0.085);
    if (score <= -2.60) {
        $('#risk').show();
        Text1('1');
        Text2('18.5-85.6月');
    } else if (score <= -1.39) {
        $('#risk').show();
        Text1('2');
        Text2('5.3-46.5月');
    } else if (score > -1.39) {
        $('#risk').show();
        Text1('3');
        Text2('2.3-15.5月');
    } else {
        $('#risk').hide();
    }

    Answer(Round(score, 2));
}

