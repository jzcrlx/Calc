function MDCalc(z) {
    // console.log(z)
    var score = z.lesion + z.ann + z.sex + z.ecog;

    if (z.age > 85) {
        score += 49;
    } else if (z.age > 70) {
        score += 49 * ((z.age - 70) / 15);
    }

    if (z.count < 2) {
        score += 25 * ((2 - z.count) / 2);
    }

    if (z.ldh >= 5) {
        score += 100;
    } else if (z.ldh >= 1.3) {
        score += 45 + (55 * ((z.ldh - 1.3) / 3.7));
    } else if (z.ldh >= 0.5) {
        score += 45 * ((z.ldh - 0.5) / 0.8);
    } else {
        score += 0;
    }

    var probability;
    if (score > 250) {
        probability = 0.10;
    } else if (score > 200) {
        probability = 0.20 - 0.10 * ((score - 200) / 50);
    } else if (score > 150) {
        probability = 0.37 - 0.17 * ((score - 150) / 50);
    } else if (score > 125) {
        probability = 0.47 - 0.10 * ((score - 125) / 25);
    } else if (score > 100) {
        probability = 0.58 - 0.11 * ((score - 100) / 25);
    } else if (score > 75) {
        probability = 0.67 - 0.09 * ((score - 75) / 25);
    } else if (score > 50) {
        probability = 0.76 - 0.11 * ((score - 50) / 25);
    } else if (score > 25) {
        probability = 0.83 - 0.07 * ((score - 25) / 25);
    } else if (score > 0) {
        probability = 0.88 - 0.05 * ((score - 0) / 25);
    } else {
        probability = 0.88;
    }
    probability = 100 - (probability * 100.0);
    Answer(Math.round(probability) + "%");
}

function showInfo(title) {
    var msg = "";
    if (title === "ECOG活动状态") {
        msg = '<p>0-活动能力完全正常，与起病前活动能力无任何差异。</p>' +
            '<p>1-能自由走动及从事轻体力活动，包括一般家务或办公室工作，但不能从事较重的体力活动。</p>' +
            '<p>2-能自由走动及生活自理，但已丧失工作能力，日间不少于一半时间可以起床活动。</p>' +
            '<p>3-生活仅能部分自理，日间一半以上时间卧床或坐轮椅。 </p>' +
            '<p>4-卧床不起，生活不能自理</p>';
    } else if (title === "Ann Arbor分期") {
        msg = '<p>I期-侵犯单个淋巴结区域（I）或单个结外器官或部位（IE）但无淋巴结受累。单个淋巴结区域可包括1个淋巴结或1组相邻的淋巴结。</p>' +
            '<p>II期-侵犯2个或2个以上淋巴结区域，但均在隔肌的同侧（II），可伴有同侧的局限性结外器官或组织侵犯（IIE）。</p>' +
            '<p>III期-隔肌两侧淋巴结区域或淋巴结构均有侵犯。</p>' +
            '<p>IV期-结外器官或组织受广泛侵犯，伴有或不伴相关淋巴结侵犯等。</p>';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}