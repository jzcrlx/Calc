/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item2=0.055	// µmol/L
    this.item3=1	// g/L
    this.item4=0.01	// g/dL
    this.item5=0.01	// g/100mL
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
