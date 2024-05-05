function MDCalc(z) {
    var res = '';
    var res2 = '';
    var weight = z.weight;
    if (weight >= 3.5 && weight <= 10) {
        res = weight * 100;
        res2 = weight * 100 / 24;
    } else if (weight > 10 && weight <= 20) {
        res = (1000 + 50 * (weight - 10));
        res2 = (1000 + 50 * (weight - 10)) / 24;
    } else if (weight > 20) {
        if ((1500 + 20 * (weight - 20)) > 2400) {
            res = 2400;
            res2 = 2400 / 24;
        } else {
            res = (1500 + 20 * (weight - 20));
            res2 = (1500 + 20 * (weight - 20)) / 24;
        }
    }
    Answer(Round(res, 0));
    Answer2(Round(res2, 2));
}
