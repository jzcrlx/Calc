function MDCalc(z) {
    //eGFR = 133 x (SCysC/0.8)<sup>a</sup> x (0.996)<sup>年龄</sup> x b
    var age = z.age;
    var a = -0.499;
    var scysc = z.scysc;
    var b = 1;
    //女性
    if (z.female == 1) {
        b = 0.932;
    }
    if (scysc <= 0.8) {
        a = -0.499;
    } else {
        a = -1.328;
    }

    var value = 133 * Math.pow(scysc / 0.8, a) * Math.pow(0.996, age) * b;
    Answer(Round(value, 4))
}
