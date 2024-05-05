function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if(score<4){
        Text("低危（立即出院）");
    }else if(score>6){
        Text(changeColor("高危（早期侵袭性救治策略）","red"));
    }else {
        Text("中危（住院观察）");
    }
}