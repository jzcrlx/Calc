/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=	0.0144211	// µmol/L

    this.item3=	0.1	// µg/mL
    this.item4=	0.1	// mg/L
    this.item5=	1.0	// mg/dL
    this.item6=	1.0	// mg/100mL
    this.item7=	1.0	// mg%
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
