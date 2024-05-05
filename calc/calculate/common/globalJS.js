/**
 * 公式通用方法
 * @type {string}
 */
var pref = "si";
var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-26609643-1"]);
_gaq.push(["_trackPageview"]);
_gaq.push(["_setCustomVar", 2, "Category", "Emergency Nav|Internal Medicine Nav|Neuro Nav|Neurologic|Neurology|Score|", 3]);
_gaq.push(["_setCustomVar", 3, "Unit", pref, 3]);
var processed = 0;
Number.prototype.between = function (a, b) {
    return this >= a && this <= b
};

function Round(value, digits) {
    if (isNaN(value)) {
        return 0;
    }
    var d = Math.pow(10, digits);
    return Math.round(value * d) / d;
}

function Answer(ans) {
    $("#result").val(ans);
    _gaq.push(["_trackEvent", "Equation", "Calculated", ""]);
    processed = 1;
}

function Answer1(ans) {
    $("#result1").val(ans)
}

function Answer2(ans) {
    $("#result2").val(ans)
}

function Answer3(ans) {
    $("#result3").val(ans)
}

function Answer4(ans) {
    $("#result4").val(ans)
}

function Answer5(ans) {
    $("#result5").val(ans)
}

function Answer6(ans) {
    $("#result6").val(ans)
}

function Answer7(ans) {
    $("#result7").val(ans)
}

function Answer8(ans) {
    $("#result8").val(ans)
}

function Text(txt) {
    $("#resultmsg").html(txt);
    processed = 1
}

function Text1(txt) {
    $("#resultmsg1").html(txt);
}

function Text2(txt) {
    $("#resultmsg2").html(txt)
}

function Text3(txt) {
    $("#resultmsg3").html(txt)
}

function Text4(txt) {
    $("#resultmsg4").html(txt)
}

function Text5(txt) {
    $("#resultmsg5").html(txt)
}

function Text6(txt) {
    $("#resultmsg6").html(txt)
}

function changeColor(value, color) {
    return '<span style="color:' + color + '">' + value + '</span>';
}

$(document).ready(function () {
    //全不选
    $("#noneofthese").click(function () {
        var y = {};
        var req_radio_groups = {};
        $("tr.req td :radio").each(function () {
            $(this).style("border", "0px");
            req_radio_groups[this.name] = true;
        });
        for (group in req_radio_groups) {
            if_checked = !!$(":radio[name=" + group + "]:checked").length;
            val = $(":radio[name=" + group + "]:checked").val();
            if (if_checked == false) {
                return false
            }
            if (if_checked == true) {
                y[group] = 0
            }
        }
        checkbox = $(".post form tr td input:checkbox");
        checkbox.each(function () {
            name = $(this).attr("name");
            y[name] = 0;
        });
        var inputs = $(".post form tr td input:text, .post form tr td input:checkbox:checked");
        inputs.each(function () {
            name = $(this).attr("name");
            val = $(this).val();
            y[name] = 0;
        });
        $(".post form tr input[type='checkbox']").prop("checked", false);
        $(".post form tr input[type='radio']").prop("checked", false);
        $(".post form td ul li").removeClass("clicked");
        MDCalc(y, '');
    });

    //样式
    $("table input:not([id])").each(function () {
        $(this).attr("id", $(this).attr("name"));
    });
    $(".post form tr.req td:last li").hover(function () {
        $(this).toggleClass("hoverclass");
    });
    $(".post form tr td").has(":checkbox").hover(function () {
        $(this).find("label").toggleClass("hoverclass");
    });
    $(".post form tr.req td li").click(function () {
        $(this).addClass("clicked").siblings("li").removeClass("clicked").end().find(":radio:eq(0)").attr("checked", "checked");
        Verify(this);
    });
    $(".post form tr[class!=answer]").has("input").hover(function () {
        $(this).children("td").toggleClass("texthover");
    });

    //失去焦点
    $(".post form tr td input:text").blur(function () {
        Verify(this);
    });
    $(".post form tr td input[type=number]").blur(function () {
        Verify(this);
    });
    //新版
    $(".post form .question_block input:text").blur(function () {
        Verify(this);
    });
    $(".post form .question_block input[type=number]").blur(function () {
        Verify(this);
    });

    //设置ck radio
    $(".post form tr td input:radio, .post form tr td input:checkbox").change(function () {
        Verify(this);
    });
    //新版
    $(".post form .question_block input:radio, .post form .question_block input:checkbox").change(function () {
        Verify(this);
    });
    //点击查看结果
    $("#result").click(function () {
        Verify(this);
    });

    //旧版选择
    $(".post form select").change(function () {
        Verify(this);
    });

    //新版下拉
    $('.post form .que_infor').click(function () {
        $(this).next('.que_mark').show();
    });

    $('.post form .option').click(function () {
        $(this).parent().find(".option").removeClass("selected");
        $(this).addClass("selected");
        $(this).parent().parent().parent().hide();
        var text = $(this).html();
        var val = $(this).attr('value');
        var ans = $(this).parents(".que_mark").prev().find('.answer');
        ans.html(text);
        ans.attr("value", val);
        ans.addClass("selected_val");
        Verify(this);
    });

    $('.post form .option-title-close').click(function () {
        $('.que_mark').hide();
    });

    /**
     * 验证必填并计算
     * @returns {boolean}
     * @constructor
     */
    function Verify(_this) {
        //console.log("Verify");
        if (processed == 1) {
            //清空首次计算后的结果
            $(".post form tr.answer td div").each(function () {
                //$(this).html("")
            });
            $(".post form tr.answer td input,.post form .answer_block:not(.not-reset) input").each(function () {
                $(this).val("");
                $(this).removeClass("skin-color-bold");
            });
            $(".post form .msg").each(function () {
                $(this).hide();
            });
        }
        var z = {};
        var req_radio_groups = {};
        $("tr.req td :radio").each(function () {
            req_radio_groups[this.name] = true;
        });
        $(".question_block.req :radio").each(function () {
            //console.log(this.name);
            req_radio_groups[this.name] = true;
        });
        // console.log("Verify");
        //判断必选项是否填写
        for (var group in req_radio_groups) {
            var if_checked = !!$(":radio[name=" + group + "]:checked").length;
            if (if_checked == false) {
                return false;
            }
        }
        // console.log("Verify2");
        //radio 取值
        $(".question_block :radio").each(function () {
            req_radio_groups[this.name] = true;
        });
        for (var group in req_radio_groups) {
            var if_checked = !!$(":radio[name=" + group + "]:checked").length;
            var val = $(":radio[name=" + group + "]:checked").val();
            if (if_checked == true) {
                if (val == 0 || val == "0") {
                    z[group] = 0;
                } else if (typeof (val % 2) == "number") {
                    z[group] = val * 1;
                } else if (typeof val == "string") {
                    z[group] = val;
                } else {
                    z[group] = val * 1;
                }
            }
        }
        var selectreq = $(".que_block.req .que_infor .answer");
        var s = 0;
        selectreq.each(function () {
            if (!!$(this).attr('value')) {
                s++;
            }
        });
        //console.log(selectreq.length, s);
        if (selectreq.length != s) {
            return false;
        }

        //老版 判断输入框必选项是否填写完整
        var textreq = $("tr.req td input");
        //新版 判断输入框必选项是否填写完整
        if (textreq.length == 0) {
            textreq = $(".question_block.req input");
        }
        var i = 0;
        textreq.each(function () {
            if ($(this).val().length > 0) {
                i++;
            }
        });
        //console.log("textreq:", textreq.length, i);
        //判断输入框必选项是否填写完整
        if (textreq.length == i) {
            var checkbox = $(".post form input:checkbox");
            checkbox.each(function () {
                var name = $(this).attr("name");
                z[name] = 0;
            });
            //输入项
            var inputs = $(".post form input:text,.post form input[type=number], .post form input:checkbox:checked,.post form .answer.selected_val");
            inputs.each(function () {
                var name = $(this).attr("name");
                var val = $(this).val();
                z[name] = val * 1;
            });
            //下拉
            var selects = $(".post form .answer.selected_val");
            selects.each(function () {
                var name = $(this).attr("name");
                var val = $(this).attr("value");
                z[name] = val * 1;
            });
            //console.log("z:", z);
            MDCalc(z, _this);
            //结果样式
            $(".answer input,.answer_block input").each(function () {
                $(this).addClass("skin-color-bold");
            })
        }
    }

    var us = {};
    var si = {};
    us.ca = "mg/dL";
    us.alb = "g/dL";
    us.chol = "mg/dL";
    us.trig = "mg/dL";
    us.glu = "mg/dL";
    us.hct = "%";
    us.hgb = "g/dL";
    us.na = "mEq/L";
    us.k = "mEq/L";
    us.cl = "mEq/L";
    us.hco3 = "mEq/L";
    us.bun = "mg/dL";
    us.cr = "mg/dL";
    us.wt = "磅";
    us.ht = "英寸";
    us.crclearance = "mL/min";
    us.bili = "mg/dL";
    us.nadeficit = "mEq";
    us.osm = "mOsm/kg";
    us.pa02 = "mm Hg";
    us.pao2 = "mm Hg";
    us.tidal = "mL/kg";
    us.pheny = "mg/L";
    us.a1c = "% total hemoglobin";
    us.vrh = "平均动脉压";
    us.vrm = "中心静脉压";
    us.vrsvr = "SVR";
    us.vrsvri = "SVRI";
    si.ca = "mmol/L";
    si.alb = "g/L";
    si.chol = "mmol/L";
    si.trig = "mmol/L";
    si.glu = "mmol/L";
    si.hct = "fraction of RBCs";
    si.hgb = "g/L";
    si.na = "mmol/L";
    si.k = "mmol/L";
    si.cl = "mmol/L";
    si.hco3 = "mmol/L";
    si.bun = "mmol/L";
    si.cr = "&mu;mol/L";
    si.wt = "千克";
    si.ht = "厘米";
    si.crclearance = "mL/min";
    si.bili = "&mu;mol/L";
    si.nadeficit = "mmol";
    si.osm = "mmoI/kg";
    si.pao2 = "kPa";
    si.pa02 = "kPa";
    si.tidal = "mL/kg";
    si.pheny = "&mu;mol/L";
    si.a1c = "proportion total hemoglobin";
    si.vrh = "平均肺动脉压";
    si.vrm = "肺毛细血管契压";
    si.vrsvr = "PVR";
    si.vrsvri = "PVRI";
    if (pref == "si") {
        $('option[name="si"]').attr("selected", "selected");
        $("#medform  label[class]").each(function () {
            classs = $(this).attr("class");
            $(this).html(si[classs]);
        })
    } else if (pref == "us") {
        $('option[name="us"]').attr("selected", "selected");
        $("#medform  label[class]").each(function () {
            classs = $(this).attr("class");
            $(this).html(us[classs]);
        })
    }
    $("#units").change(function () {
        pref = $(this).val();
        if (pref == "us") {
            $("#medform  label[class]").each(function () {
                classs = $(this).attr("class");
                $(this).html(us[classs]);
            })
        } else if (pref == "si") {
            $("#medform  label[class]").each(function () {
                classs = $(this).attr("class");
                $(this).html(si[classs]);
            })
        }
        if (typeof changeUnit === "function") {
            changeUnit();
        }
        Verify();
    })
});

$(document).on("touchstart", ".calc_btn:not(.disable)", function (e) {
    var $this = $(this);
    var flag = true;
    var flag2 = true;
    //遍历子类
    $this.find("*").each(function () {
        //查看有没有子类触发过active动作
        if ($(this).hasClass("active")) {
            flag = false;
        }
    });
    //如果子类已经触发了active动作，父类则取消active触发操作
    if (flag) {
        $this.addClass("active");
        $this.addClass("calc_btn_hover");
    }

});
$(document).on("touchmove", ".calc_btn:not(.disable)", function (e) {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).removeClass("calc_btn_hover");
    }
});
$(document).on("touchend", ".calc_btn:not(.disable)", function (e) {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).removeClass("calc_btn_hover");
    }
});

/**
 * 计算单位换算公式
 * @param obj
 * @param val
 * @returns {{}}
 */
function convert(factor, obj, val) {
    var z = {};
    if (obj[val]) {
        var x = 0;
        x = obj[val] * factor[val];
        for (var i in factor) {
            z[i] = Round(x / factor[i], 4);
        }
    }
    return z;
}
