function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score >= 0) {
        Text("四十分法将对整体功能评价转变为可靠的数字表示，便于学术交流和资料的比较和统计，同时也为资料的计算机处理提供基础 。");
    }
}
