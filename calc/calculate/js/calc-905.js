/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {
    this.item1=1.0	    // mg FEU/L
    this.item2=0.001	// μg FEU/L
    this.item9=1.0*2	//mg/L (DDU)
    this.item10=0.001*2	//µg/L (DDU)

    this.item3=1.0		// µg FEU/mL
    this.item4=0.001	// ng FEU/mL
    this.item5=1.0*2	//µg/mL  (DDU)
    this.item6=0.001*2	//ng/mL  (DDU)


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



