function MDCalc(z) {
    z.wt_conv = 1
    z.wt *= z.wt_conv;
    if (z.nac == "0") {
        load = Math.round(140 * z.wt);
        maint = Math.round(70 * z.wt);
        msg = "PO 剂量: 72-小时 给药方案,总共18剂<br/>1330mg/kg 给药:<br/><br/>起始剂量: " + load + "mg PO, 然后<br/>维持剂量: " + maint + "mg PO 每4小时/共72小时。<br/><br/>注意: 如果患者在给药后一小时内发生呕吐，要重新给药。";
        Text(msg);
    }
    if (z.nac == "1") {
        if (z.wt >= 100) {
            msg = "患者体重超出FDA剂量准则范围(>100kg)。IV Mucomyst厂商推荐为患者咨询毒理学专家。";
        } else if (z.wt >= 40) {
            load = Math.round(150 * z.wt);
            maint4hr = Math.round(50 * z.wt);
            maint16hr = Math.round(100 * z.wt);
            msg = "IV 剂量: 21-小时 给药方案, 3袋剂量<br/><br/>起始剂量: 60分钟，" + load + "mg IV 每 200 ml 稀释液中, 然后 每4小时<br/>" + maint4hr + "mg IV 每 500 mL 稀释液中 然后16小时<br/>" + maint16hr + "mg IV 每 1000 mL 稀释液中。"
        } else if (z.wt > 20 && z.wt < 40) {
            load = Math.round(150 * z.wt);
            maint4hr = Math.round(50 * z.wt);
            maint16hr = Math.round(100 * z.wt);
            msg = "IV 剂量: 21-小时 给药方案, '3袋剂量'<br/><br/>起始剂量: 60分钟，" + load + "mg IV 每 100 ml 稀释液中, 然后 每4小时<br/>" + maint4hr + "mg IV 每 250 mL 稀释液中 然后16小时<br/>" + maint16hr + "mg IV 每 500 mL 稀释液中。"
        } else if (z.wt <= 20) {
            load = Math.round(150 * z.wt);
            loadvol = Math.round(3 * z.wt);
            maint4hr = Math.round(50 * z.wt);
            maint4hrvol = Math.round(7 * z.wt);
            maint16hr = Math.round(100 * z.wt);
            maint16hrvol = Math.round(14 * z.wt);
            msg = "IV 剂量: 21-小时 给药方案, '3袋剂量'<br/><br/>起始剂量: 60分钟，" + load + "mg IV 每 " + loadvol + "ml (3ml/kg)稀释液中, 然后 每4小时<br/>" + maint4hr + "mg IV 每 " + maint4hrvol + "ml (7ml/kg) 稀释液中 然后16小时<br/>" + maint16hr + "mg IV 每 " + maint16hrvol + "ml (14ml/kg) 稀释液中。"
        }
        Text(msg);
    }
}