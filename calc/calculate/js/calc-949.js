/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {

    this.item3=0.240		// IU/L
    this.item4=0.1	// ng/mL
    this.item5=0.001	// ng/dL
    this.item6=0.001	// ng/100mL
    this.item7=0.001	// ng%
    this.item8=0.1		// µg/l
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
