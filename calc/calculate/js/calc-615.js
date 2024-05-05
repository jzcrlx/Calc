function MDCalc(z) {
   //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if(score>1){
        Text("SIRS 诊断成立");
    }else {
        Text("无 SIRS");
    }
}
