/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item3=0.001       // mIU/L
    this.item4=0.001	      //µIU/mL
    this.item5=1.0	     //IU/L
    this.item6=1.0	// 	mIU/mL
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
