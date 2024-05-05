function MDCalc(z) {
    if (z.age == 1) {
        if (z.month <= 12) {
            Answer(Round(0.01 * (z.month + 3) * z.dose, 2));
        } else {
            layer.open({
                content: '月龄不能大于12个月',
                time: 2,
                skin: 'msg',
                anim: 'scale'
            });
            return;
        }
    } else {
        Answer(Round(0.05 * (z.month + 2) * z.dose, 2));
    }
}

$(document).ready(function () {
    $(".age input:radio").change(function () {
        $(".month-input").val('');
        Answer('');
        if ($(this).val() == 1) {
            $(".month").html("月龄");
            $(".unit").html("月");
            $(".month-input").attr('placeholder', '月');
        } else {
            $(".month").html("小儿年龄");
            $(".month-input").attr('placeholder', '岁');
            $(".unit").html("<span style='color: red'>岁</span>");
        }
    });
});