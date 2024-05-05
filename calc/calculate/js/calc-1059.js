/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=	0.0247143	// nmol/L
    
    this.item3=	1.0	// µg/dL
    this.item4=	1.0	// µg/100mL
    this.item5=	1.0	// µg%
    this.item6=	0.1	// µg/L
    this.item7=	0.1	// ng/mL
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
