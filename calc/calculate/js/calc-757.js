function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score <= 1) {
        Text("出院后1年死亡率估计 0-1分：4-13%");
    } else if (score <= 3) {
        Text("出院后1年死亡率估计 2-3分：19-20%")
    } else if (score <= 6) {
        Text("出院后1年死亡率估计 4-6分：34-37%");
    } else if (score <= 20) {
        Text("出院后1年死亡率估计 7-20分：64-68%");
    }
}
