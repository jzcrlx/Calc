function MDCalc(z) {
    // console.log(z);
    var alertStrings1;
    var alertStrings2;
    if (z.type === 3) {
        alertStrings1 = "每天4次SMBG直到血糖达标。";
        alertStrings2 = "妊娠期糖尿病";
    } else if (z.type === 0) {
        alertStrings1 = "不推荐常规SMBG";
        alertStrings2 = "对于糖尿病前期，没有推荐SMBG模式";
    } else if (z.type === 1) {
        if (z.treatment) {
            alertStrings2 = "每日四次(注射基础胰岛素)";
            if ((z.treatment === 0) || (z.treatment === 5)) {
                alertStrings1 = "每天4次或更多次。";
            } else {
                alertStrings1 = "实施更强化的胰岛素治疗方案。SMBG至少和注射胰岛素一样频繁。";
            }
        } else {
            alertStrings1 = "每天4次或更多次。";
            alertStrings2 = "胰岛素泵";
        }
    } else if (z.type === 2) {
        if (z.treatment === 0) {
            alertStrings1 = "每天4次或更多次。";
            alertStrings2 = "胰岛素泵";
        } else if (z.treatment === 1) {
            if (z.a1c === 1) {
                alertStrings1 = "SMBG至少和注射胰岛素一样频繁。";
                alertStrings2 = "仅基础胰岛素(针对目标)";
            } else {
                alertStrings1 = "每天2次或更多次，直到达到目标。";
                alertStrings2 = "仅基础胰岛素(未达到目标)";
            }
        } else if ((z.treatment === 2) || (z.treatment === 3)) {
            if (z.a1c === 1) {
                alertStrings1 = "SMBG至少和注射胰岛素一样频繁。";
            } else {
                alertStrings1 = "每天2次或更多次，直到达到目标。";
            }
            alertStrings2 = "预混胰岛素(或NPH，每日两次)";
        } else if ((z.treatment === 4)) {
            if (z.a1c === 1) {
                alertStrings1 = "SMBG至少和注射胰岛素一样频繁。";
            } else {
                alertStrings1 = "每天2次或更多次，直到达到目标。";
            }
            alertStrings2 = "基础+";
        } else if (z.treatment === 5) {
            alertStrings1 = "SMBG至少和注射胰岛素一样频繁。";
            alertStrings2 = "每日四次(注射基础胰岛素)";
        } else {
            if (z.sick === 1) {
                alertStrings1 = "每天2次或更多次。";
                alertStrings2 = "病人病了或者正在服用类固醇药物。";
            } else {
                if (z.duration === 1) {
                    alertStrings1 = "每天在不同时间进行一次或多次SMBG，以了解饮食、运动、药物的影响。";
                    alertStrings2 = "在过去6个月内被诊断为z. 2型糖尿病或未达到血糖指标";
                } else {
                    if (z.a1c === 1) {
                        alertStrings1 = "罕见的SMBG推荐;每周1 - 2次。";
                        alertStrings2 = "z. 2型糖尿病通过生活方式和口服药物治疗，达到了血糖指标。";
                    } else {
                        alertStrings1 = "每天1次或更多次。";
                        alertStrings2 = "在过去6个月内被诊断为z. 2型糖尿病或未达到血糖指标";
                    }
                }
            }

        }
    }
    Text1(alertStrings1);
    Text2(alertStrings2);
}

