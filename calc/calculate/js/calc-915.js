/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {

    this.item1=	0.0270372	// pmol/L


    this.item3=	1.0	// ng/dL
    this.item4=	1.0	// ng/100mL
    this.item5=	1.0	// ng%
    this.item6=	0.1	// ng/L
    this.item7=	0.1	// pg/mL
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



