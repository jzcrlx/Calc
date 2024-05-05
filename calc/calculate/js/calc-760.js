function MDCalc(z) {
    if (z.rad1 === 0 && z.rad2 === 0) {
        Answer(1);
        Text("2 %");
    } else if (z.rad1 === 0 && z.rad2 === 1) {
        Answer(3);
        Text("12 %");
    } else if (z.rad1 === 1 && z.rad2 === 0) {
        Answer(2);
        Text("10 %");
    } else if (z.rad1 === 1 && z.rad2 === 1) {
        Answer(4);
        Text("54 %");
    }
}
