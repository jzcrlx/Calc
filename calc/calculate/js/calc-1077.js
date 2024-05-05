function MDCalc(z) {
    var value = 0;
    if (z.age == 1) {
        //儿童
        value = z.weight * 2.0;
    } else if (z.age == 2) {
        //成人
        value = z.weight * 1.7;
    } else if (z.age == 3) {
        //老年人
        value = z.weight * 1.0;
    }
    if (z.sex == 2 && z.baby == 1) {
        value = value * 1.25;
    }

    Answer(Round(value, 1));
}

$(document).ready(function () {
    $('.q1,.q2').hide();
    $(".age:radio").change(function (data) {
        var id = data.currentTarget.id;
        if (id == 'age3') {
            $('.q2').show();
        } else {
            $('.q2').hide();
        }
    });
    $(".sex:radio").change(function (data) {
        var id = data.currentTarget.id;
        if (id == 'sex2') {
            $('.q1').show();
        } else {
            $('.q1').hide();
        }
    });
});
