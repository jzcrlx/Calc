/**
 * @param z
 * @constructor
 */
function MDCalc(z, me) {
    if (me && me.id != 'result') {
        var e = $("[name='hba1c_ifcc']"),
            t = $("[name='hba1c_ngsp']"),
            n = $("[name='glc_mg']"),
            r = $("[name='glc_mmol']");
        var i;
        if (me.name === "hba1c_ngsp") {
            if (z[me.name] < 0 || z[me.name] > 16) {
                e.val("");
                n.val("");
                r.val("");
                return;
            }
            i = (z[me.name] - 2.15) / 0.0915;
        } else if (me.name === "hba1c_ifcc") {
            if (z[me.name] < 0 || z[me.name] > 150) {
                t.val("");
                n.val("");
                r.val("");
                return;
            }
            i = z[me.name];
        } else if (me.name === "glc_mg") {
            if (z[me.name] < 0 || z[me.name] > 414) {
                t.val("");
                e.val("");
                r.val("");
                return;
            }
            i = (z[me.name] - 15.01) / 2.63;
        } else if (me.name === "glc_mmol") {
            if (z[me.name] < 0 || z[me.name] > 23) {
                t.val("");
                e.val("");
                n.val("");
                return;
            }
            i = (z[me.name] - 0.829) / 0.146;
        }
        var o = Round(0.0915 * i + 2.15, 1);
        var a = Round(2.63 * i + 15.01, 2);
        var s = Round(0.146 * i + 0.829, 2);
        i = Round(i, 0);
        if (i < 0) {
            i = "";
        }
        if (o < 0) {
            o = "";
        }
        if (a < 0) {
            a = "";
        }
        if (s < 0) {
            s = "";
        }
        if (me.name !== "hba1c_ifcc") {
            e.val(i);
        }
        if (me.name !== "hba1c_ngsp") {
            t.val(o);
        }
        if (me.name !== "glc_mg") {
            n.val(a);
        }
        if (me.name !== "glc_mmol") {
            r.val(s);
        }
    }
}
