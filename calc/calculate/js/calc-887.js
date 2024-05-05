/**
 * 换算因子
 * @type {FACTOR}
 */
function FACTOR() {

    this.item1=	0.023626// µmol/L

    this.item3=1.000 //mg/l
    this.item4=1.000	// mg/dl
    this.item5=1.000	//mg/100ml
    this.item6=0.100	// mg%
    this.item7=0.100	 // µg/ml



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



