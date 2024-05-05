/**
 * 换算因子
 * @type {FACTOR}
 */

function FACTOR () {

    this.item1=1            // fL

    this.item3=1            // µm^3
    this.item4=1            //cu µm
    this.item5=1         // cubic µm
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
