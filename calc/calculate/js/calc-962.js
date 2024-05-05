/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item3=1	// g/L
    this.item4=0.01	// mg/dL
    this.item5=0.01	// mg/100mL
    this.item6=0.01	// g%
    this.item7=1	 // mg/mL
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
