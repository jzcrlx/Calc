/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {
    this.item1=0.06	        // nkat/L
    this.item2=60.0	        // µkat/l
    this.item3=1			// U/L
    this.item4=1			// IU/L
    this.item5=1			// µmol/(min•L)
    this.item6=0.01666666	// µmol/(h•L)
    this.item7=16.67		// µmol/(h•mL)
    this.item9=0.06		    // nmol/(s•L)
    this.item10=60.0		// µmol/(s•L)		
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



