/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=	0.0450707	// nmol/L
    this.item3=	0.1	// ng/mL
    this.item4=	0.1	// µg/L
    this.item5=	1.0	// µg/dL
    this.item6=	1.0	// µg/100mL
    this.item7=	1.0	// µg%
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
