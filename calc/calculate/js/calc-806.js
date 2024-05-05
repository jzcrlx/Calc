function MDCalc(z) {
    if (z.type == 1) {
        $("#t").show();
        if ($("#nm").is(":visible")) {
            $("#nm").hide()
        }
        var t1 = z.t == 1;
        var t2 = z.t == 2;
        var t3 = z.t == 3;
        var t4 = z.t == 4;
        var f1 = z.fuhrman == 1;
        var f_lt_3 = z.fuhrman < 3;
        var f_gt_1 = z.fuhrman > 1;
        var f_gt_2 = z.fuhrman > 2;
        var e0 = z.ecog == 0;
        var e1 = z.ecog == 1;
        var low = t1 && f_lt_3 && e0;
        var high = (t3 && f_gt_1 && e1) || t4;
        if (high) {
            Text('高度风险');
        } else if (low) {
            Text('低风险');
        } else {
            Text('中度风险');
        }
    } else {
        $("#nm").show();
        if ($("#t").is(":visible")) {
            $("#t").hide()
        }
        var n1 = z.n == 1;
        var n2 = z.n == 2;
        var m0 = z.m == 0;
        var m1 = z.m == 1;
        var f1 = z.fuhrman == 1;
        var f2 = z.fuhrman == 2;
        var f3 = z.fuhrman == 3;
        var f4 = z.fuhrman == 4;
        var f_gt_2 = z.fuhrman > 2;
        var f_lt_3 = z.fuhrman < 3;
        var f_lt_4 = z.fuhrman < 4;
        var e0 = z.ecog == 0;
        var e1 = z.ecog == 1;
        var high = n2 && m0 && f4 && e1 || n2 && m1 && f4 && e1;
        var low = (n1 && m0) || (n2 && m0 && f_lt_3 && e0) || (n2 && m1 && f_lt_3 && e0);
        if (high) {
            Text('高度风险');
        } else if (low) {
            Text('低风险');
        } else {
            Text('中度风险');
        }
    }

}
