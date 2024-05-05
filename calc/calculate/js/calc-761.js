function MDCalc(z) {
    var majorCrit = z.che1 + z.che2 + z.che3 + z.che4 + z.che5 + z.che6 + z.che7 + z.che8 + z.che9;
    var minorCrit = z.che10 + z.che11 + z.che12 + z.che13 + z.che14 + z.che15 + z.che16;
    if (majorCrit >= 2) {
        Text("符合充血性心力衰竭的标准");
    } else if (majorCrit == 1 && minorCrit >= 2) {
        Text("符合充血性心力衰竭的标准");
    } else {
        Text("不符合Framingham心脏衰竭诊断标准");
    }
}
