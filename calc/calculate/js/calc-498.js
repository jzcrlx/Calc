function MDCalc(z) {
    // console.log(z);
    if(checkExercise(z)){
        Answer1(z.jinshi + z.shuxi + z.xiyu + z.xiayi + z.shangyi + z.yongce + z.painiao + z.paibian + z.chuang + z.ruce + z.yupen + z.buxing + z.louti);
    }
    if(checkPerceive(z)){
        Answer2(z.lijie+z.biaoda+z.shehui+z.jiejue+z.jiyi)
    }
    if(checkPerceive(z)&&checkExercise(z)){
        var score = 0;
        for (var key in z) {
            if (key !== "result"&&key !== "result1"&&key !== "result2") {
                score += z[key];
            }
        }
        Answer(score);
    }
}

function checkExercise(z) {
    if (z.jinshi != null && z.shuxi != null && z.xiyu != null && z.shangyi != null && z.xiayi != null && z.yongce != null && z.painiao != null && z.paibian != null && z.chuang != null && z.ruce != null && z.yupen != null && z.buxing != null && z.louti != null) {
        return true;
    } else {
        return false;
    }
}
function checkPerceive(z) {
    if (z.lijie != null && z.biaoda != null && z.shehui != null && z.jiejue != null && z.jiyi != null) {
        return true;
    } else {
        return false;
    }
}