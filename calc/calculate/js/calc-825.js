var totalCalc = false;
var total1 = 0;

function MDCalc(z) {
    var score1 = 0;
    //1.1-1.13得分
    var key1 = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
    var num1 = 0;

    var score2 = 0;

    var score3 = 0;
    //3.1-3.18得分
    var key3 = ['item31', 'item32', 'item33a', 'item33b', 'item33c', 'item33d', 'item33e', 'item34a', 'item34b',
        'item35a', 'item35b', 'item36a', 'item36b', 'item37a', 'item37b', 'item38a', 'item38b', 'item39', 'item310', 'item311', 'item312', 'item313',
        'item314', 'item315a', 'item315b', 'item316a', 'item316b', 'item317a', 'item317b', 'item317c', 'item317d', 'item317e', 'item318'];
    var num3 = 0;

    var score4 = 0;
    //4.1-4.6得分
    var key4 = ['item41', 'item42', 'item43', 'item44', 'item45', 'item46'];
    var num4 = 0;

    for (var key in z) {
        if (key1.includes(key)) {
            num1++;
            score1 += z[key];
           // console.log(key + ":" + z[key]);
        } else if (key3.includes(key)) {
            num3++;
            score3 += z[key];
           // console.log(key + ":" + z[key]);
        } else if (key == 'item3a') {
            $('#result3a').html(z[key] == 0 ? '是' : '否');
        } else if (key == 'item3b') {
            $('#result3b').html(z[key] == 0 ? '开期' : '关期');
        } else if (key == 'item3c') {
            $('#result3c').html(z[key] == 0 ? '是' : '否');
            if (z[key] == 1) {
                $('#item3c1Id').val('');
                $('#result3c1').html('');
            }
        } else if (key == 'item3c1') {
            if (z['item3c'] == 1) {
                $('#result3c1').html('');
            } else {
                $('#result3c1').html(z[key]);
            }
        } else if (key == 'item319a') {
            $('#result319a').html(z[key] == 0 ? '是' : '否');
        } else if (key == 'item319b') {
            $('#result319b').html(z[key] == 0 ? '是' : '否');
        } else if (key == 'item319') {
            var s = z[key];
            var a = '';
            if (s == 0) {
                a = '没有症状。';
            } else if (s == 1) {
                a = '仅有单侧症状。';
            } else if (s == 2) {
                a = '双侧均受累，但平衡功能未受影响。';
            } else if (s == 3) {
                a = '轻度到中度受累；姿势有不稳但仍可独自站稳；在后拉试验时需要辅助才能恢复平衡。';
            } else if (s == 4) {
                a = '严重的功能障碍；但在没人帮助的情况下仍能行走或站立。';
            } else if (s == 5) {
                a = '如果没人帮助将完全依靠轮椅或终日卧床。';
            }
            $('#result319').html(z[key] + '分' + ',' + a);
        } else if (key4.includes(key)) {
            num4++;
            score4 += z[key];
            console.log(key + ":" + z[key]);
        }
    }
    //1.1-1.6得分
    if (num1 == key1.length) {
        Text1(score1);
        total1 = $("#patient1ScoreId").val() * 1 + score1;
        $("#resultmsg1Total").html(total1);
    }

    if (num3 == key3.length) {
        Text3(score3);
    }
    if (num4 == key4.length) {
        Text4(score4);
    }

    if (num1 == key1.length && num3 == key3.length && num4 == key4.length) {
        totalCalc = true;
        score1 = score1 + $("#patient1ScoreId").val() * 1;
        score2 = $("#patient2ScoreId").val() * 1;
        console.log("score1 " + score1);
        console.log("score2 " + score2);
        Text5(score1 + score2 + score3 + score4);
    } else {
        totalCalc = false;
    }
}

$(document).ready(function () {
    $("#item41aId,#item41bId").blur(function () {
        var a = $('#item41aId').val();
        var b = $('#item41bId').val();
        if (a && b) {
            var c = b / a;
            var d = 0;
            if (b == 0) {
                d = 0;
            } else if (c <= 0.25) {
                d = 1;
            } else if (c <= 0.5) {
                d = 2;
            } else if (c <= 0.75) {
                d = 3;
            } else if (c > 0.75) {
                d = 4;
            }
            $('input[name="item41"]').each(function () {
                if ($(this).attr("value") == d) {
                    $(this).attr("checked", "checked");
                } else {
                    $(this).removeAttr("checked");
                }
            });
        } else {
            $('input[name="item41"]').each(function () {
                $(this).removeAttr("checked");
            });
        }
    });


    $("#item43aId,#item41aId").blur(function () {
        var a = $('#item41aId').val();
        var b = $('#item43aId').val();
        if (a && b) {
            var c = b / a;
            var d = 0;
            if (b == 0) {
                d = 0;
            } else if (c <= 0.25) {
                d = 1;
            } else if (c <= 0.5) {
                d = 2;
            } else if (c <= 0.75) {
                d = 3;
            } else if (c > 0.75) {
                d = 4;
            }
            $('input[name="item43"]').each(function () {
                if ($(this).attr("value") == d) {
                    $(this).attr("checked", "checked");
                } else {
                    $(this).removeAttr("checked");
                }
            });
        } else {
            $('input[name="item43"]').each(function () {
                $(this).removeAttr("checked");
            });
        }
    });
    $("#patientNameId").blur(function () {
        $("#resultmsg").html($(this).val());
    });
    //患者得分
    $("#patient1ScoreId").blur(function () {
        $("#resultmsg1Total").html($(this).val() * 1 + $("#resultmsg1").html() * 1);
        //总分
        if (totalCalc) {
            Text5($("#resultmsg1Total").html() * 1 + $("#resultmsg2").html() * 1 + $("#resultmsg3").html() * 1 + $("#resultmsg4").html() * 1);
        }
    });
    $("#patient2ScoreId").blur(function () {
        $("#resultmsg2").html($(this).val() * 1);
        //总分
        if (totalCalc) {
            Text5($("#resultmsg1Total").html() * 1 + $("#resultmsg2").html() * 1 + $("#resultmsg3").html() * 1 + $("#resultmsg4").html() * 1);
        }
    });
    $("#item46aId,#item43aId").blur(function () {
        var a = $('#item43aId').val();
        var b = $('#item46aId').val();
        if (a && b) {
            var c = b / a;
            var d = 0;
            if (b == 0) {
                d = 0;
            } else if (c <= 0.25) {
                d = 1;
            } else if (c <= 0.5) {
                d = 2;
            } else if (c <= 0.75) {
                d = 3;
            } else if (c > 0.75) {
                d = 4;
            }
            $('input[name="item46"]').each(function () {
                if ($(this).attr("value") == d) {
                    $(this).attr("checked", "checked");
                } else {
                    $(this).removeAttr("checked");
                }
            });
        } else {
            $('input[name="item46"]').each(function () {
                $(this).removeAttr("checked");
            });
        }
    });
});
