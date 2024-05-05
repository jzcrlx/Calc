function MDCalc(z) {
   // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    if(score<5){
        Text("阑尾炎的可能性极低");
    }else if(score>=5&&score<6){
        Text("有阑尾炎的可能");
    }else if(score>=7){
        Text(changeColor("阑尾炎的可能性极大","red"));
    }
}
