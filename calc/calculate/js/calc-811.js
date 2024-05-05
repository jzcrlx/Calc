function MDCalc(z) {
    console.log(z)
    let score = z.ecog;

    if (z.age < 50) {
        score += 0;
    } else if (z.age >= 50 && z.age <= 59) {
        score += 1;
    } else if (z.age >= 60 && z.age <= 69) {
        score += 2;
    } else if (z.age >= 70) {
        score += 3;
    }

    if (z.ldh < 0.67) {
        score += 0;
    } else if (z.ldh >= 0.67 && z.ldh <= 0.99) {
        score += 1;
    } else if (z.ldh >= 1.00 && z.ldh <= 1.49) {
        score += 2;
    } else if (z.ldh >= 1.50) {
        score += 3;
    }

    if (z.bxb < 6.70) {
        score += 0;
    } else if (z.bxb >= 6.70 && z.bxb <= 9.99) {
        score += 1;
    } else if (z.bxb >= 10.00 && z.bxb <= 14.49) {
        score += 2;
    } else if (z.bxb >= 15.00) {
        score += 3;
    }

    Answer(score);

    if (score >= 0 && score <= 3) {
        Text("低危组");
    } else if (score >= 4 && score <= 5) {
        Text("中危组");
    } else if (score >= 6 && score <= 11) {
        Text("高危组");
    }

}
