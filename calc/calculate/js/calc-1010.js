/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=1			// s
    this.item3=1            //  sec
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
