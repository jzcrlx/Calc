/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=0.1	// g/L

    this.item3=1.0	// g/dl
    this.item4=1.0	// g/100ml
    this.item5=1.0	// g%
    this.item6=0.1	 // mg/ml
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
