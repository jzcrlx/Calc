/**
 Sokal Score = exp([0.0116 × (age in years – 43.4)] + [0.0345 × (spleen size in cm – 7.51)] +
 [0.188 x ((platelets in 10<sup>9</sup>/L / 700)<sup>2</sup> – 0.563)] + [0.0887 × (blasts in % – 2.10)])
 * @param z
 * @constructor
 */
function MDCalc(z) {
    var age = z.age;
    var sp = z.sp;
    var plt = z.plt;
    var bla = z.bla;
    var score = Math.exp(0.0116 * (age - 43.4) + 0.0345 * (sp - 7.51) + 0.188 * (Math.pow(plt / 700, 2) - 0.563) + 0.0887 * (bla - 2.10));
    if (score < 0.8) {
        $('#risk').show();
        Text1('低风险');
        Text2('90%');
        Text3('5年');
    } else if (score <= 1.2) {
        $('#risk').show();
        Text1('中风险');
        Text2('65-90%');
        Text3('2.5-5年');
    } else if (score > 1.2) {
        $('#risk').show();
        Text1('高风险');
        Text2('65%');
        Text3('2.5年');
    } else {
        $('#risk').hide();
    }

    Answer(Round(score, 1));
}

