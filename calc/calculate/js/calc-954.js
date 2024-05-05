/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=5.5845	        // µmol/L
    this.item2=5584.5	// µmol/L

    this.item3=1.0	// µg/dl
    this.item4=1.0	// µg/100ml
    this.item5=1.0	// µg%
    this.item6=0.1	// µg/l
    this.item7=0.1	 // ng/mL
    this.item8=100	// mg/l
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
