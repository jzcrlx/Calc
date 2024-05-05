/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=30	// µmol/l
    this.item2=0.030	// nmol/L
    this.item3=1	// mg/l
    this.item4=10	// mg/dl
    this.item5=10	//mg/100ml
    this.item6=10	// mg%
    this.item7=1	 // µg/ml
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



