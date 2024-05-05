/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=1		// 10^9/L
    this.item2=1		// G/L
    this.item3=1		// 10^3/µL
    this.item4=1		// 10^3/mm^3
    this.item5=1		// K/µL
    this.item6=1		// K/mm^3
    this.item7=0.001	// cells/µL
    this.item8=0.001	// cells/mm^3
    this.item9=1		// Gpt/L
    this.item10=0.000000001 // cells/L
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



