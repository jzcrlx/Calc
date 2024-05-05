function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if (score > 0) {
        Text(changeColor("高危", "red"));
        Text2("8.9 %");
    } else {
        Text("低危");
        Text2("1.1 %n可进行院外管理");
    }
}
