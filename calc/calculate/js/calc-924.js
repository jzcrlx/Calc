/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
//z
    this.item1=1.0    // mmol/L
    this.item2=0.001	// µmol/L
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



