function MDCalc(z) {
    var score1 = 0;
    var score2 = 0;
    score1 = z.gcs + z.openskullfx + z.basilarskullfx + z.vomiting + z.age;
    score2 = z.amnesia + z.mechanism;
    var msg;
    if (score2 > 0 || score1 > 0) {
        msg = "需要CT检查（高危）";
    } else if (score1 == 0 && score2 == 0) {
        msg = "无需CT检查";
    }
    $('.answer_block').show();
    Text(msg);
}

$("#units").hide();