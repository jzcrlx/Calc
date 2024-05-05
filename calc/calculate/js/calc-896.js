/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=0.0063546 // µmol/L

    this.item3=0.1	// µg/mL
    this.item4=0.001	// µg/dl
    this.item5=0.001	//  µg/100ml
    this.item6=0.001	// 	µg%
    this.item7=0.0001	 // µg/L
    this.item8=0.1	// mg/l
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
