function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score > 0) {
        Text("建议行头颅 CT");
    } else {
        Text("无需头颅 CT");
    }
}