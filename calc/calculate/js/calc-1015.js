/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=1		// 10^12/L
    this.item2=1		// T/L
    this.item3=1		// 10^6/µL
    this.item4=1		// 10^6/mm^3
    this.item5=1		// M/µL
    this.item6=1		// M/mm^3
    this.item7=0.000001	// cells/µL
    this.item8=0.000001	// cells/mm^3
    this.item9=1		// Tpt/L
    this.item10=0.000000000001 // cells/L
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
