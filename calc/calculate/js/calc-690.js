function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 6) {
        Text("提示存在瞻望或痴呆");
    } else {
        Text("");
    }
}