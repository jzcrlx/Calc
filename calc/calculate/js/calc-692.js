function MDCalc(z) {
    //console.log(z);
    if (z.fluency) {
        if (z.understanding) {
            if (z.repetition) {
                Text("命名性失语");
            } else {
                Text("传导性失语");
            }
        } else {
            if (z.repetition) {
                Text("感觉性失语");
            } else {
                Text("Wernicke 失语");
            }
        }
    } else {
        if (z.understanding) {
            if (z.repetition) {
                Text("运动性失语");
            } else {
                Text("Broca 失语");
            }
        } else {
            if (z.repetition) {
                Text("混合性失语");
            } else {
                Text("完全性失语");
            }
        }
    }
}