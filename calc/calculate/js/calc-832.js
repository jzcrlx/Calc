/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1 = 10.411	// mmol/L
    this.item2 = 0.010411	// µmol/L
    this.item3 = 1.0	// mg/dL
    this.item4 = 1.0	// mg/100mL
    this.item5 = 1.0	// mg%
    this.item6 = 0.1	// mg/L
    this.item7 = 0.1	// µg/mL
    //this.item8=		//
    //this.item9=		//
    //this.item10=		//
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



