function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score ===5) {
        Text("无需颈椎射片");
    } else {
        Text("建议颈椎射片");
    }
}