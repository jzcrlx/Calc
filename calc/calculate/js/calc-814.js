function MDCalc(z) {
    var score = 0;
    console.log(z);
    score = getValue(z.head_area) * (getValue(z.head_i) + getValue(z.head_e) + getValue(z.head_d)) * 0.1;
    score += getValue(z.arm_area) * (getValue(z.arm_i) + getValue(z.arm_e) + getValue(z.arm_d)) * 0.2;
    score += getValue(z.body_area) * (getValue(z.body_i) + getValue(z.body_e) + getValue(z.body_d)) * 0.3;
    score += getValue(z.leg_area) * (getValue(z.leg_i) + getValue(z.leg_e) + getValue(z.leg_d)) * 0.4;
    Answer(score.toFixed(1));
    if (score > 0) {
        Text("");
    }
}

function getValue(v) {
    if (!v) {
        return 0;
    }
    return v;
}