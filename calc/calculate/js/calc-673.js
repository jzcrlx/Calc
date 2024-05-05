function MDCalc(z) {
    // console.log(z)
    if(z.painmalleolarzone){
        $("#painmalleolarzone-link").show();
        $("#common-link").show();
    }else {
        if ($("#painmalleolarzone-link").is(":visible")) {
            $("#painmalleolarzone-link").hide()
        }
        if(!z.painmidfootzone){
            if ($("#common-link").is(":visible")) {
                $("#common-link").hide()
            }
        }
    }
    if(z.painmidfootzone){
        $("#painmidfootzone-link1").show();
        $("#painmidfootzone-link2").show();
        $("#common-link").show();
    }else {
        if ($("#painmidfootzone-link1").is(":visible")) {
            $("#painmidfootzone-link1").hide()
        }
        if ($("#painmidfootzone-link2").is(":visible")) {
            $("#painmidfootzone-link2").hide()
        }
        if(!z.painmalleolarzone){
            if ($("#common-link").is(":visible")) {
                $("#common-link").hide()
            }
        }
    }
    let footimagingrequired;
    if (z.base) {
        footimagingrequired = 1;
    } else {
        if (z.navicular) {
            footimagingrequired = 1;
        } else {
            if (z.painmalleolarzone) {
                footimagingrequired = z.inabilitybearweight;
            } else {
                footimagingrequired = 0;
            }
        }
    }
    let ankleimagingrequired;
    if (z.posterior) {
        ankleimagingrequired = 2;
    } else {
        if (z.painmalleolarzone) {
            if (z.inabilitybearweight) {
                ankleimagingrequired = 2;
            } else {
                ankleimagingrequired = 0;
            }
        } else {
            ankleimagingrequired = 0;
        }
    }
    if (ankleimagingrequired + footimagingrequired === 3) {
        Text("需要足踝摄片");
    } else if (ankleimagingrequired + footimagingrequired === 2) {
        Text("需要踝部摄片");
    } else if (ankleimagingrequired + footimagingrequired === 1) {
        Text("需要足部摄片");
    }
}