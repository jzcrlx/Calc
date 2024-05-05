function MDCalc(z) {
    if (z.num == 1) {
        $(".wt").show();
        if (z.wt > 30) {
            layer.open({
                content: '体重不能大于30kg',
                time: 2,
                skin: 'msg',
                anim: 'scale'
            });
            return;
        }
        if (z.wt) {
            Answer(Round(z.wt * 0.035 + 0.1, 1));
        }
    } else {
        $(".wt").hide();
        if (z.num == 2) {
            Answer("1.2");
        } else if (z.num == 3) {
            Answer("1.3");
        } else if (z.num == 4) {
            Answer("1.4");
        } else if (z.num == 5) {
            Answer("1.5");
        } else if (z.num == 6) {
            Answer("1.6");
        } else if (z.num == 7) {
            Answer("1.7");
        }
    }


}
