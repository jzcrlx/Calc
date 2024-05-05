function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(6 - score);
    if (score > 5) {
        Text("患者独立");
    } else if (score < 2) {
        Text("患者高度依赖");
    } else {
        Text("");
    }
}

function showInfo(title) {
    var msg = "";
    if (title === "洗浴") {
        msg = '以下情况视为独立： 完全独立洗浴或仅在某一部位需要帮助，如背后、会阴部或残障的肢端等。 以下情况视为依赖（需要帮助）： 洗浴时身体一个以上部位需要他人协助、需协助进出浴缸或淋浴房。需要全程盆浴。';
    } else if (title === "穿衣") {
        msg = '以下情况视为独立： 能从衣橱和抽屉中取出衣物并自行穿上和扣起扣子。系鞋带时可能需要帮助。 以下情况视为依赖（需要帮助）： 穿衣时需要部分或完全依赖他人协助。';
    } else if (title === "如厕") {
        msg = '以下情况视为独立： 能独立进入厕所、开始和结束排便、整理衣物、并清理会阴区。 以下情况视为依赖（需要帮助）： 需他人协助进入厕所和清理、或使用床边便盆或便桶等。';
    } else if (title === "转移") {
        msg = '以下情况视为独立： 能独立上下床或起坐等。可借助相关器械辅助。 以下情况视为依赖（需要帮助）： 需要部分或完全依赖他人协助上下床和起坐等。';
    } else if (title === "括约肌功能") {
        msg = '以下情况视为独立： 自主控制排便和排尿。 以下情况视为依赖（需要帮助）： 大便或小便部分或完全性失禁。';
    } else if (title === "进食") {
        msg = '以下情况视为独立： 能独立从餐盘中取得食物并放入嘴里。食物可由他人代为准备。 以下情况视为依赖（需要帮助）： 需要部分或完全依赖他人协助进食，或需肠外营养支持。';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}