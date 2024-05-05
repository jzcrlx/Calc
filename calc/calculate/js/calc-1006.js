/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1= 0.1	// μg/L
    this.item3=0.0047		// μIU/mL
    this.item4=0.0047       // mIU/L
    this.item5=0.1	// ng/mL
    this.item6=0.001	// ng/dL
    this.item7=0.001	// ng/100mL
    this.item8=0.001		// ng%
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
