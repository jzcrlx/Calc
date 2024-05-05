function MDCalc(z) {
    var a1 = z.item6 || 0;
    //睡眠质量
    Answer(Round(a1, 1));
    var item2score = 0;
    var b0 = z.item2;
    if (b0 >= 60) {
        item2score = 3;
    } else if (b0 < 60 && b0 > 30) {
        item2score = 2;
    } else if (b0 <= 30 && b0 > 15) {
        item2score = 1;
    } else if (b0 <= 15) {
        item2score = 0;
    }
    var bb = z.item5a || 0;
    var bbb = bb + item2score;
    var b1 = 0;
    if (bbb == 0) {
        b1 = 0;
    } else if (bbb <= 2 && bbb >= 1) {
        b1 = 1;
    } else if (bbb >= 3 && bbb <= 4) {
        b1 = 2;
    } else if (bbb >= 5 && bbb <= 6) {
        b1 = 3;
    }
    //入睡时间
    Answer2(Round(b1, 1));
    var cc = z.item4 || 0;
    var c1 = 0;
    if (cc > 7) {
        c1 = 0;
    } else if (cc > 6 && cc <= 7) {
        c1 = 1;
    } else if (cc >= 5 && cc <= 6) {
        c1 = 2;
    } else if (cc < 5) {
        c1 = 3;
    }
    //睡眠时间
    Answer3(Round(c1, 1));
    var bedtime = 1;
    if (z.item1 >= z.item3) {
        bedtime = z.item3 + 24 - z.item1;
    } else if (z.item1 < z.item3) {
        bedtime = z.item3 - z.item1;
    }
    var sheep_e = cc / bedtime;
    var d1 = 0;
    if (sheep_e > 0.85) {
        d1 = 0;
    } else if (sheep_e > 0.75 && sheep_e < 0.85) {
        d1 = 1;
    } else if (sheep_e <= 0.75 && sheep_e >= 0.65) {
        d1 = 2;
    } else if (sheep_e < 0.65) {
        d1 = 3;
    }
    //睡眠效率
    Answer4(Round(d1, 1));
    var b5 = z.item5b || 0;
    var c5 = z.item5c || 0;
    var d5 = z.item5d || 0;
    var e5 = z.item5e || 0;
    var f5 = z.item5f || 0;
    var g5 = z.item5g || 0;
    var h5 = z.item5h || 0;
    var i5 = z.item5i || 0;
    var j5 = z.item5j || 0;
    var sheep1 = b5 + c5 + d5;
    var sheep2 = e5 + f5 + g5;
    var sheep3 = h5 + i5 + j5;
    var sheep = sheep1 + sheep2 + sheep3;
    var e1 = 0;
    if (sheep == 0) {
        e1 = 0;
    } else if (sheep >= 1 && sheep <= 9) {
        e1 = 1;
    } else if (sheep <= 18 && sheep >= 10) {
        e1 = 2;
    } else if (sheep >= 19) {
        e1 = 3;
    }
    //睡眠障碍
    Answer5(Round(e1, 1));
    //催眠药物
    var f1 = z.item7 || 0;
    Answer6(Round(f1, 1));
    var gg = z.item8 + z.item9;
    var g1 = 0;
    if (gg == 0) {
        g1 = 0;
    } else if (gg == 1 || gg == 2) {
        g1 = 1;
    } else if (gg == 3 || gg == 4) {
        g1 = 2;
    } else if (gg == 5 || gg == 6) {
        g1 = 3;
    }
    //日间功能障碍
    Answer7(Round(g1, 1));
    var psqi = 0;
    psqi = a1 + b1 + c1 + d1 + e1 + f1 + g1;
    //PSQI
    Answer8(Round(psqi, 1));
    var msg = "";
    if (psqi <= 5) {
        msg = "睡眠质量很好";
    } else if (psqi > 5 && psqi <= 10) {
        msg = "睡眠质量还行";
    } else if (psqi > 10 && psqi < 16) {
        msg = "睡眠质量一般";
    } else if (psqi >= 16) {
        msg = "睡眠质量很差";
    }
    Text(msg);
}
