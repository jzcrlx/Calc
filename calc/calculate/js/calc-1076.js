function MDCalc(z) {
    if (z.jzx == 2 && !z.ft4) {
        return;
    }
    var vol;
    if (z.jzx == 1) {
        var left = 0.7412 * z.left_len * z.left_height * z.left_thick;
        var right = 0.7365 * z.right_len * z.right_height * z.right_thick;
        vol = (left + right) / 1000 - 0.55;
        vol = Round(vol, 1);
        if (left > 0 && right > 0) {
            $('#vol').val(vol);
        } else {
            $('#vol').val('');
            return;
        }
        var score = 0;
        if (z.age < 30) {
            score += 30;
        }
        if (z.gd == 1) {
            score += 48;
        }
        if (z.trab >= 13) {
            score += 57;
        }
        if (z.size == 2) {
            score += 34;
        }
        if (z.ohd == 1) {
            score += 40;
        }
        if (vol >= 26.4) {
            score += 100;
        }
        Answer(score);
        if (score <= 50) {
            Text('10%-20%');
        } else if (score <= 90) {
            Text('20%-30%');
        } else if (score <= 110) {
            Text('30%-40%');
        } else if (score <= 135) {
            Text('40%-50%');
        } else if (score <= 155) {
            Text('50%-60%');
        } else if (score <= 175) {
            Text('60%-70%');
        } else if (score <= 195) {
            Text('70%-80%');
        } else if (score <= 220) {
            Text('80%-90%');
        } else {
            Text('90%');
        }
    } else if (z.jzx == 2) {
        var score = 0;
        if (z.age < 40) {
            score += 1;
        }
        if (z.trab >= 20) {
            score += 2;
        } else if (z.trab >= 6) {
            score += 1;
        }
        if (z.size == 2) {
            score += 2;
        }
        if (z.ft4 == 1) {
            score += 1;
        }
        Answer(score);
        if (score <= 1) {
            Text('Ⅰ级，复发率为16.4％');
        } else if (score <= 3) {
            Text('Ⅱ 级，复发率为43.9％');
        } else if (score <= 6) {
            Text('Ⅲ 级，复发率为68.4％');
        }
    }
}

$(document).ready(function () {
    $('.q1,.q2').hide();
    $(".jzx:radio").change(function (data) {
        var id = data.currentTarget.id;
        if (id == 'jzx1') {
            $('.q1').show();
            $('.q2').hide();
        } else if (id == 'jzx2') {
            $('.q1').hide();
            $('.q2').show();
        }
        Text('');
    });
});
