/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {

    this.item1=6.4458		// mmol/L
    this.item2=0.0064458	// µmol/L
    this.item3=0.1	// g/l
    this.item4=1.0	// g/dl
    this.item5=1.0	// g/100ml
    this.item6=1.0	// g%
    this.item7=0.1	 // mg/ml
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
