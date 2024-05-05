function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    var msg = '';
    if (score < 2) {
        msg = 'DVT低危人群。根据Well的DVT研究 "不可能".';
    }
    if (score >= 2) {
        msg = 'DVT高危人群。根据Well的DVT研究 "可能".';
    }
    Text(msg);
}

$("#units").hide();