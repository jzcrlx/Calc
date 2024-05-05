function MDCalc(z) {
    var hzwt = z.wt;
    if (pref == "us") {
        hzwt = hzwt * .45359
    }
    Text("肾上腺素：" + Math.round(parseFloat(10 * hzwt)) + "μg<br/>阿托品：" + Math.round(parseFloat(20 * hzwt)) + "μg<br/>碳酸氢盐：" + Math.round(parseFloat(1 * hzwt)) + "-" + Math.round(parseFloat(2 * hzwt)) + "mmol<br/>氯化钙：" + Math.round(parseFloat(10 * hzwt)) + "-" + Math.round(parseFloat(20 * hzwt)) + "mg<br/>葡萄糖酸钙：" + Math.round(parseFloat(30 * hzwt)) + "-" + Math.round(parseFloat(60 * hzwt)) + "mg<br/>腺苷：" + Math.round(parseFloat(100 * hzwt) / 100) / 10 + "mg<br/>胺碘酮：" + Math.round(parseFloat(5 * hzwt)) + "mg<br/>利多卡因：" + Math.round(parseFloat(1 * hzwt)) + "mg<br/>普鲁卡因胺：" + Math.round(parseFloat(5 * hzwt)) + "-" + Math.round(parseFloat(15 * hzwt)) + "mg<br/>镁：" + Math.round(parseFloat(25 * hzwt)) + "-" + Math.round(parseFloat(50 * hzwt)) + "mg");
    Text2("依托咪酯：" + Math.round(parseFloat(.2 * hzwt) * 10) / 10 + "-" + Math.round(parseFloat(.3 * hzwt) * 10) / 10 + "mg<br/>氯胺酮：" + Math.round(parseFloat(1 * hzwt)) + "-" + Math.round(parseFloat(2 * hzwt)) + "mg<br/>硫喷妥：" + Math.round(parseFloat(4 * hzwt)) + "-" + Math.round(parseFloat(6 * hzwt)) + "mg<br/>琥珀酰胆碱：" + Math.round(parseFloat(1 * hzwt)) + "-" + Math.round(parseFloat(2 * hzwt)) + "mg<br/>罗库溴铵：" + Math.round(parseFloat(.6 * hzwt) * 10) / 10 + "-" + Math.round(parseFloat(1.2 * hzwt) * 10) / 10 + "mg")
}
$(document).ready(function () {
    $('#clear').click(function () {
        Text('');
        Text2('');
    });
});
