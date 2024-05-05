/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=1			// Proportion
    this.item3=0.01            //  %
    this.item4=1            // "U/ml";
    this.item5=1         	//kU/L
}
var factor = new FACTOR();

/**
 * @param z
 * @constructor
 */
function MDCalc(z, me) {
    if (me) {
        var res = convert(factor, z, me.name);
        for (var name in res) {
            if ($("[name='" + name + "']")) {
                $("[name='" + name + "']").val(res[name]);
            }
        }
    }
}



