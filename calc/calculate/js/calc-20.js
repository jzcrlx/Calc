function MDCalc(z) {
    var msg = "";
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    if (score < 7) {
        msg = "Child分级 A.<br/>预期寿命 : 15-20 年.<br/>腹部手术围手术期病死率: 10%";
    } else if (score > 6 && score < 10) {
        msg = "Child分级 B.<br/>进行移植评价的适应证.<br/>腹部手术围手术期病死率: 30%";
    } else if (score > 9) {
        msg = "Child分级 C.<br/>预期寿命: 1-3 年.<br/>腹部手术围手术期病死率: 82%";
    }
    Text(msg);
}