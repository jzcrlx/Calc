function MDCalc(z) {
    // console.log(z)
    z.jinrun = z.jinrun || 0;
    z.linxuan = z.linxuan || 0;
    z.hongban = z.hongban || 0;
    let sum = z.jinrun + z.linxuan + z.hongban;
    let result1 = "";
    result1 = Round(sum / 3, 1);
    Answer(result1);
    var result = Math.round(sum / 3);
    var msg = ""
    if (result == 0) {
        msg = "除残留颜色外，完全清除"
    } else if (result == 1) {
        msg = "极轻度"
    } else if (result == 2) {
        msg = "轻度"
    } else if (result == 3) {
        msg = "中度"
    } else if (result == 4) {
        msg = "明显"
    } else if (result == 5) {
        msg = "<span style='color: red'> 严重</span>"
    }
    Text1(msg);
}