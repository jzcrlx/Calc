function MDCalc(z) {
    if (z.activity + z.motor + z.verbal == 15) {
        Text("15 分");
    } else {
        //睁眼
        eyes = "";
        //语言
        verbal = "";
        //运动
        motor = "";
        value = 0;
        if (z.activity == -1) {
            eyes += "E(C)";
            value += 0;
        } else {
            eyes += "E" + z.activity;
            value += z.activity;
        }
        //语言
        if (z.verbal == -1) {
            verbal += " V(T)";
            value += 0;
        } else {
            eyes += " V" + z.verbal;
            value += z.verbal;
        }
        motor = "M" + z.motor;
        value += z.motor;
        msg = value + " 分: " + eyes + ' ' + verbal + ' ' + motor;
        Text(msg);
    }
}

$("#units").hide();