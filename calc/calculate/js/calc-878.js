/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item2=0.105 // nmol/L
    this.item3=1// mg/l
    this.item4=1	// mg/dl
    this.item5=10	//mg/100ml
    this.item6=10	// mg%
    this.item7=10	 // µg/ml
    this.item8=1000	// g/L

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



