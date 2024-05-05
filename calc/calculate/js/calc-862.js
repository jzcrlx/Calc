/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item2=0.0140// pmol/L
    this.item3=0.1		// ng/mL
    this.item4=0.001	// ng/dL
    this.item5=0.001	// ng/100mL
    this.item6=0.001	// ng%
    this.item7=0.0001	// ng/L
    this.item8=0.0001		// pg/mL
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



