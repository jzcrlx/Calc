/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=1.6114		// mmol/L
    this.item2=0.0016114	// µmol/L
    this.item3=0.1	// mg/l
    this.item4=1.0	// mg/dl
    this.item5=1.0	// mg/100ml
    this.item6=1.0	// mg%
    this.item7=0.1	 // mg/ml
    this.item8=1	        // %
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
