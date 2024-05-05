function MDCalc(z) {
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
    Text1(Round((z.ans1 + z.ans2 + z.ans5 + z.ans9) / 4, 1));
    Text2(Round((z.ans3 + z.ans13 + z.ans16 + z.ans18) / 4, 1));
    Text3(Round((z.ans4 + z.ans8 + z.ans12 + z.ans15) / 4, 1));
    Text4(Round((z.ans6 + z.ans7 + z.ans17) / 3, 1));
    Text5(Round((z.ans10 + z.ans11 + z.ans14) / 3, 1));

}
