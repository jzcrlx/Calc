/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=16.811	// mmol/L
    this.item2=0.016811// µmol/L
    this.item3=1.0	// mg/dl
    this.item4=1.0	// mg/100ml
    this.item5=1.0	// mg%
    this.item6=0.1	// mg/l
    this.item7=0.1	 // µg/ml
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
