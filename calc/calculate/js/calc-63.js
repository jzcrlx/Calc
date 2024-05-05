function MDCalc(z) {
    var lmpid = $("#lmp").val();
    var ddid = $("#duedates").val();
    var wks = $("#wks").val();
    var days = $("#days").val();
    if (wks && ddid || wks && lmpid) {
        showInfo("胎龄,末次月经日期和预产期仅能输入一项");
        return false;
    }
    if (ddid) {
        var today = Date.today();
        var dd = Date.parse(ddid);
        var lmp = Date.parse(ddid).add(-40).weeks();
        lmps = lmp.toString("ddd M/d/yyyy");
        var conception = Date.parse(ddid).add(-38).weeks();
        conception = conception.toString("ddd M/d/yyyy");
        var ega = today - lmp;
        ega = ega / 864e5;
        var weeks = parseInt(ega / 7);
        if (weeks > 42) {
            showInfo("一种可能是怀孕已经超过42周，孩子现在即将出生；另一种可能是末次月经日期计算错误或输入错误，请仔细检查。");
            return false;
        }
        var days = ega % 7;
        days = Math.round(days * 1) / 1;
        if (days == 7) {
            weeks = weeks + 1;
            var result = "正好" + weeks + " 周"
        } else {
            var result = weeks + " 周 加 " + days + "/7 天"
        }
        Text(result);
        Text2(lmps);
        Text3(" ");
        Text4(conception)
    }
    if (lmpid) {
        var today = Date.today();
        var lmp = Date.parse(lmpid);
        if (lmp > today) {
            showInfo("末次月经日期不应该在今天之后. 检查一下年份.");
            return false;
        }
        var edd = Date.parse(lmpid).add(40).weeks();
        edd = edd.toString("ddd M/d/yyyy");
        var conception = Date.parse(lmpid).add(14).days();
        conception = conception.toString("ddd M/d/yyyy");
        var ega = today - lmp;
        ega = ega / 864e5;
        var weeks = parseInt(ega / 7);
        if (weeks > 42) {
            showInfo("一种可能是怀孕已经超过42周，孩子现在即将出生；另一种可能是末次月经日期计算错误或输入错误，请仔细检查。");
            return false;
        }
        var days = ega % 7;
        days = Math.round(days * 1) / 1;
        if (days == 7) {
            weeks = weeks + 1;
            var result = "正好" + weeks + " 周"
        } else {
            var result = weeks + " 周 加 " + days + "/7 天"
        }
        Text(result);
        Text2(" ");
        Text3(edd);
        Text4(conception)
    }
    if (wks) {
        if (!days) {
            days = 0
        }
        wks *= -1;
        days *= -1;
        var today = Date.today();
        var lmp = today.add(wks).weeks();
        if (days != 0) {
            lmps = lmp.add(days).days()
        } else {
            lmps = lmp
        }
        Text2(lmps.toString("ddd M/d/yyyy"));
        var conception = lmp.add(14).days();
        Text4(conception.toString("ddd M/d/yyyy"));
        var edd = lmp.add(40).weeks();
        Text3(edd.toString("ddd M/d/yyyy"))
    }
}

function showInfo(msg) {
    layer.open({
        title: "提示",
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
    return true;
}
$("#units").hide();