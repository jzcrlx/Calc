/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=0.027238 // pmol/L

    this.item3=0.1		// pg/mL
    this.item4=0.001	// pg/dL
    this.item5=0.001	// pg/100mL
    this.item6=0.001	// pg%
    this.item7=0.0001	// pg/L
    this.item8=0.1		// ng/L
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



