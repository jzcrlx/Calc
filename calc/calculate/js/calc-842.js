/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR() {
    this.item1=66.460	// mmol/L
    this.item2=0.066460// µmol/L
    this.item3=1	// g/l
    this.item4=10	// g/dl
    this.item5=10	// g/100ml
    this.item6=10	// g%
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



