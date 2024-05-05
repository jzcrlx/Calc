function MDCalc(z) {
    z.sex = $("#sex").val();
    z.age = $("#age").val();
    z.tc = $("#tc").val();
    z.hdl = $("#hdl").val();
    z.bp = $("#bp").val();
    if (z.sex == "m") {
        if (z.smoker == 1) {
            smoker = 2
        } else {
            smoker = 0
        }
        if (z.diabetic == 1) {
            diabetic = 2
        } else {
            diabetic = 0
        }
        switch (z.age) {
            case"a":
                s1 = -1;
                nlrisk = 3;
                break;
            case"b":
                s1 = 0;
                nlrisk = 5;
                break;
            case"c":
                s1 = 1;
                nlrisk = 7;
                break;
            case"d":
                s1 = 2;
                nlrisk = 11;
                break;
            case"e":
                s1 = 3;
                nlrisk = 14;
                break;
            case"f":
                s1 = 4;
                nlrisk = 16;
                break;
            case"g":
                s1 = 5;
                nlrisk = 21;
                break;
            case"h":
                s1 = 6;
                nlrisk = 25;
                break;
            case"i":
                s1 = 7;
                nlrisk = 30;
                break
        }
        switch (z.tc) {
            case"a":
                s2 = -3;
                break;
            case"b":
                s2 = 0;
                break;
            case"c":
                s2 = 1;
                break;
            case"d":
                s2 = 2;
                break;
            case"e":
                s2 = 3;
                break
        }
        switch (z.hdl) {
            case"a":
                s3 = 2;
                break;
            case"b":
                s3 = 1;
                break;
            case"c":
                s3 = 0;
                break;
            case"d":
                s3 = 0;
                break;
            case"e":
                s3 = -2;
                break
        }
        switch (z.bp) {
            case"a":
                s4 = 0;
                break;
            case"b":
                s4 = 0;
                break;
            case"c":
                s4 = 1;
                break;
            case"d":
                s4 = 2;
                break;
            case"e":
                s4 = 3;
                break
        }
        value = s1 + s2 + s3 + s4 + smoker + diabetic;
        if (value <= -1) {
            Answer(2)
        }
        if (value == 0) {
            Answer(3)
        }
        if (value == 1) {
            Answer(3)
        }
        if (value == 2) {
            Answer(4)
        }
        if (value == 3) {
            Answer(5)
        }
        if (value == 4) {
            Answer(7)
        }
        if (value == 5) {
            Answer(8)
        }
        if (value == 6) {
            Answer(10)
        }
        if (value == 7) {
            Answer(13)
        }
        if (value == 8) {
            Answer(16)
        }
        if (value == 9) {
            Answer(20)
        }
        if (value == 10) {
            Answer(25)
        }
        if (value == 11) {
            Answer(31)
        }
        if (value == 12) {
            Answer(37)
        }
        if (value == 13) {
            Answer(45)
        }
        if (value >= 14) {
            Answer(">53")
        }
        Answer2(nlrisk)
    } else if (z.sex == "f") {
        if (z.smoker == 1) {
            smoker = 2
        } else {
            smoker = 0
        }
        if (z.diabetic == 1) {
            diabetic = 4
        } else {
            diabetic = 0
        }
        switch (z.age) {
            case"a":
                s1 = -9;
                nlrisk = "<1";
                break;
            case"b":
                s1 = -4;
                nlrisk = "<1";
                break;
            case"c":
                s1 = 0;
                nlrisk = 2;
                break;
            case"d":
                s1 = 3;
                nlrisk = 5;
                break;
            case"e":
                s1 = 6;
                nlrisk = 8;
                break;
            case"f":
                s1 = 7;
                nlrisk = 12;
                break;
            case"g":
                s1 = 8;
                nlrisk = 12;
                break;
            case"h":
                s1 = 8;
                nlrisk = 13;
                break;
            case"i":
                s1 = 8;
                nlrisk = 14;
                break
        }
        switch (z.tc) {
            case"a":
                s2 = -2;
                break;
            case"b":
                s2 = 0;
                break;
            case"c":
                s2 = 1;
                break;
            case"d":
                s2 = 1;
                break;
            case"e":
                s2 = 3;
                break
        }
        switch (z.hdl) {
            case"a":
                s3 = 5;
                break;
            case"b":
                s3 = 2;
                break;
            case"c":
                s3 = 1;
                break;
            case"d":
                s3 = 0;
                break;
            case"e":
                s3 = -3;
                break
        }
        switch (z.bp) {
            case"a":
                s4 = -3;
                break;
            case"b":
                s4 = 0;
                break;
            case"c":
                s4 = 0;
                break;
            case"d":
                s4 = 2;
                break;
            case"e":
                s4 = 3;
                break
        }
        value = s1 + s2 + s3 + s4 + smoker + diabetic;
        if (value <= -2) {
            Answer(1)
        }
        if (value == -1) {
            Answer(2)
        }
        if (value == 0) {
            Answer(2)
        }
        if (value == 1) {
            Answer(2)
        }
        if (value == 2) {
            Answer(3)
        }
        if (value == 3) {
            Answer(3)
        }
        if (value == 4) {
            Answer(4)
        }
        if (value == 5) {
            Answer(4)
        }
        if (value == 6) {
            Answer(5)
        }
        if (value == 7) {
            Answer(6)
        }
        if (value == 8) {
            Answer(7)
        }
        if (value == 9) {
            Answer(8)
        }
        if (value == 10) {
            Answer(10)
        }
        if (value == 11) {
            Answer(11)
        }
        if (value == 12) {
            Answer(13)
        }
        if (value == 13) {
            Answer(15)
        }
        if (value == 14) {
            Answer(18)
        }
        if (value == 15) {
            Answer(20)
        }
        if (value == 16) {
            Answer(24)
        }
        if (value >= 17) {
            Answer(">27")
        }
        Answer2(nlrisk)
    }
}

$("#units").hide();