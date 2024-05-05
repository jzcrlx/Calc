function MDCalc(z) {
    //console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    if (score == 0) {
        Text("淋巴细胞增多，中位生存期＞10年");
    } else if (score == 1) {
        Text("淋巴细胞增多+淋巴结肿大，中位生存期7-9年");
    } else if (score == 2) {
        Text("淋巴细胞增多+脾增大，中位生存期7-9年");
    } else if (score == 3) {
        Text("淋巴细胞增多+Hb＜110g/L，中位生存期1.5-5年");
    } else if (score == 4) {
        Text("淋巴细胞增多+血小板数＜100000/mm<sup>3</sup>，中位生存期1.5-5年");
    }
}