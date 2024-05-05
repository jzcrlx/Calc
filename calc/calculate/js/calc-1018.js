/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item3=1.0       // U/mL
    this.item4=1.0	      // kU/L
    this.item5=1.0	     //IU/mL
    this.item6=1.0	// 	kIU/L
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
