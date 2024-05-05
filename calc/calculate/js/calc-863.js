/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=28.0	// mmol/L
    this.item2=0.0280	// µmol/L
    this.item3=1	// g/l
    this.item4=0.01	// mg/dl
    this.item5=0.01	// mg/100ml
    this.item6=0.01	// mg%
    this.item7=1	 // mg/ml
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



