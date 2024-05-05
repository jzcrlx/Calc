function MDCalc(z) {
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    var msg;
    if (score > 0) {
        msg = "新奥尔良头部创伤规则表明该患者需要CT检查来排除颅内创伤性发现物（敏感性97-100%)。";
    } else if (score == 0) {
        msg = "新奥尔良头部创伤规则表明该患者无需CT检查，可排除存在颅内创伤性发现物的可能性（敏感性97-100%)。";
    }
    Text(msg);
}

$("#units").hide();