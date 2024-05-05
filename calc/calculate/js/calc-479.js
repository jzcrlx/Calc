function MDCalc(z) {
    if (z.sex == 1) {
        var value = Math.exp(0.544 * Math.log(z.age) - 0.0151 * z.age - 74.7 / z.height + 5.48);
        var value2 = z.pef / value * 100;
        Answer(Round(value, 1));
        Answer2(Round(value2, 2));
    } else {
        var value = Math.exp(0.376 * Math.log(z.age) - 0.0120 * z.age - 58.8 / z.height + 5.63);
        var value2 = z.pef / value * 100;
        Answer(Round(value, 1));
        Answer2(Round(value2, 2));
    }

}
