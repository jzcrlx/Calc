/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR() {
    this.item1	=	0.0151165	//  µmol/L
    this.item3	=	0.1	// µg/ml
    this.item4	=	0.1	// mg/l
    this.item5	=	1.0	// mg/dl
    this.item6	=	1.0	// mg/100ml
    this.item7	=	1.0	// mg%
//this.mass8	=		//
//this.mass9	=		//
//this.mass10	=		//
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



