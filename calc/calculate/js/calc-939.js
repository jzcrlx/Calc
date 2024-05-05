/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {

    this.item1=1			// L/L
    this.item2=1	// Proportion of 1.0 (fraction)
    this.item3=0.01            //  %
    this.item9=1        // volume fraction
//this.mass10=1
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
