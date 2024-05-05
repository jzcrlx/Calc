function MDCalc(z) {
    var score1 = 0;
    //1.7-1.13得分
    var key1 = ['item7', 'item8', 'item9', 'item10', 'item11', 'item12', 'item13'];
    var num1 = 0;

    var score2 = 0;
    //2.1-2.13得分
    var key2 = ['item21', 'item22', 'item23', 'item24', 'item25', 'item26', 'item27', 'item28', 'item29', 'item210', 'item211', 'item212', 'item213'];
    var num2 = 0;

    for (var key in z) {
        if (key1.includes(key)) {
            num1++;
            score1 += z[key];
            //console.log(key + ":" + z[key]);
        } else if (key2.includes(key)) {
            num2++;
            score2 += z[key];
            //console.log(key + ":" + z[key]);
        }
    }
    if (num1 == key1.length) {
        Text1(score1);
    }
    if (num2 == key2.length) {
        Text2(score2);
    }

}

$(document).ready(function () {
    $("#patientNameId").blur(function () {
        Text($(this).val());
    });
});
