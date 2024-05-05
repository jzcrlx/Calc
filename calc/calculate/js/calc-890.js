/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=1.0    // mmol/L

    this.item3=1.0	// mEq/L
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



