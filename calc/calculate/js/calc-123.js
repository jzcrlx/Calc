function MDCalc(z) {
    var method = $('#method').val();
    var data = {};
    var textreq = $(".q_radio:radio:checked,.question_block input[type=number]");
    textreq.each(function () {
        var name = $(this).attr("name");
        var value = $(this).val();
        data[name] = value * 1;
    });
    if (method == 1) {
        //体重
        if (!data.weight_old || !data.weight) {
            return;
        }
        if (data.weight > data.weight_old) {
            layer.open({
                content: '现体重大于原体重,无需补液',
                time: 2,
                skin: 'msg',
                anim: 'scale'
            });
            return;
        }
        var value1 = 30 * (data.weight_old - data.weight);
        var value2 = 40 * (data.weight_old - data.weight);
        Answer(Round(value1, 1) + "~" + Round(value2, 1));
        $('#result').addClass("skin-color-bold");
    } else if (method == 2) {
        //血细胞比容
        if (!data.hct || !data.weight) {
            return;
        }
        if (data.hct < 0 || data.hct > 1) {
            layer.open({
                content: '请输入0-1之间的值',
                time: 2,
                skin: 'msg',
                anim: 'scale'
            });
            return;
        }
        var p = 0.48;
        if (data.sex == 2) {
            p = 0.42;
        }
        var res = (data.hct - p) / p * data.weight * 200;
        if (res < 0) {
            res = 0;
        }
        Answer(Round(res, 1));
        $('#result').addClass("skin-color-bold");
    } else if (method == 3) {
        //按血钠
        if (!data.na || !data.weight) {
            return;
        }
        var p = 4;
        if (data.sex == 2) {
            p = 3;
        }
        var res = p * data.weight * (data.na - 142);
        if (res < 0) {
            res = 0;
        }
        Answer(Round(res, 1));
        $('#result').addClass("skin-color-bold");
    }
}

var units = ['ml', 'ml', 'ml'];

function setQue(no) {
    for (var i = 1; i <= 3; i++) {
        if (i != no) {
            $('.que' + i).hide();
        }
    }
    $('.que' + no).show();
    $('#unit').html(units[no - 1]);
    $('#result').val('');
}

$(document).ready(function () {
    $("#method").change(function () {
        setQue($('#method').val());
    });

    $(".q_radio:radio").change(function () {
        MDCalc();
    });

    $('#result').click(function () {
        MDCalc();
    })
    setQue(1);
})