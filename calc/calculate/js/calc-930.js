/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=	0.1	// ng/L


    this.item3=	0.1	// pg/mL
    this.item4=	1.0	// ng/dL
    this.item5=	1.0	// ng/100mL
    this.item6=	1.0	// ng%

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
