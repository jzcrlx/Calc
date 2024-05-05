/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {

    this.item3=1	// µg/l
    this.item4=10	// µg/dl
    this.item5=10	//µg/100ml
    this.item6=10	// µg%
    this.item7=1	 // ng/mL


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



