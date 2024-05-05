function MDCalc(z) {
    var msg = "";
    var score = 0;
    for (var x in z) {
        if (x !== "result") {
            score += z[x];
        }
    }
    Answer(score);
    if (document.medform.stroke.checked) {
        msg += "";
    }
    if (score == 0) {
        msg += "血栓栓塞事件的危险度低等。如果没有使用香豆素，每年血栓栓塞事件的风险为1.9%";
    } else if (score == 1) {
        msg += "血栓栓塞事件的危险度中等。如果没有使用香豆素，每年血栓栓塞事件的风险为2.8%";
    } else if (score == 2) {
        msg += "血栓栓塞事件的危险度中等。如果没有使用香豆素，每年血栓栓塞事件的风险为4.0%";
    } else if (score == 3) {
        msg += "血栓栓塞事件的危险度高等。如果没有使用香豆素，每年血栓栓塞事件的风险为5.9%";
    } else if (score == 4) {
        msg += "血栓栓塞事件的危险度高等。如果没有使用香豆素，每年血栓栓塞事件的风险为8.5%";
    } else if (score == 5) {
        msg += "血栓栓塞事件的危险度高等。如果没有使用香豆素，每年血栓栓塞事件的风险为12.5%";
    } else if (score == 6) {
        msg += "血栓栓塞事件的危险度高等。如果没有使用香豆素，每年血栓栓塞事件的风险为18.2%";
    }
    Text(msg);
}

$("#units").hide();