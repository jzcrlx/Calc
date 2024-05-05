/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=16.114		// fmol
    this.item2=16.114		// fmol/cell
    this.item3=1		// pg
    this.item4=1		// pg/cell
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
