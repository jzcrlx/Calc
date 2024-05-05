function MDCalc(z) {
    Answer(calc($(".date").val()));
}

$(document).ready(function () {
    var today = KINGYEE.common.format(new Date(), 'yyyy-MM-dd');
    $(".date").attr('value', today);
    Answer(calc(today));

    $(".date").change(function () {
        Answer(calc($(this).val()));
    });
    $('#result').addClass("skin-color-bold");
});

function calc(date) {
    var year = date.split('-')[0] * 1;
    var month = date.split('-')[1] * 1;
    var day = date.split('-')[2] * 1;
    var res = new Date();
    if (month <= 3) {
        res.setFullYear(year);
        res.setMonth(month - 1 + 9);
        res.setDate(day + 7);
    } else {
        res.setFullYear(year + 1);
        res.setMonth(month - 1 - 3);
        res.setDate(day + 7);
    }
    return KINGYEE.common.format(res, 'yyyy-MM-dd');
}