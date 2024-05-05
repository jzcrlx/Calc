/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=0.1  // µg/l
    this.item2=0.0001	// ng/L

    this.item3=0.001	// ng/dL
    this.item4=0.001	// ng/100mL
    this.item5=0.001	// ng%
    this.item6=0.1	// 	ng/mL
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



