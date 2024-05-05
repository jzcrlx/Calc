/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=6.10168	// mmol/L
    this.item2=0.00610168	// µmol/L
    this.item3=6.10168	//  mEq/L
    this.item4=1.0	// mg/dL
    this.item5=1.0	// mg/100mL
    this.item6=1.0	// mg%
    this.item7=0.1	 // µg/mL
    this.item8=0.1	// mg/L
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



