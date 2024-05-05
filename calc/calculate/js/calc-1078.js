
Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "H+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function showInfo(title, no) {
    var msg = "";
    if (no == 1) {
        msg = '指被相关动物咬伤、抓伤、舔到破损皮肤或粘膜的日期';
    } else if (no == 2) {
        msg = 'OK';
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}

function calc(strDate) {
    // 211接种程序是0、7、21天，第1次（0天）接种2针
    // 第0天，第一剂接种当天，第3天，第7天，第14天，第28天各接种一剂
    let fa211 = "";
    let fa5 = "";
    fa211 = "<div>第1、2针：" + addDay(0, strDate) + "</div><div>第  3  针：" + addDay(7, strDate) + "</div><div>第  4  针：" + addDay(21, strDate) + "</div>";
    document.querySelector("#show211").innerHTML = fa211;
    // document.querySelector("#show211Title").innerHTML = "第1、2针：</br>第3针：</br>第4针：";
    fa5 = "<div>第1针：" + addDay(0, strDate) + "</div><div>第2针：" + addDay(3, strDate) + "</div><div>第3针：" + addDay(7, strDate) + "</div><div>第4针：" + addDay(14, strDate) + "</div><div>第5针：" + addDay(28, strDate) + "</div>";
    document.querySelector("#show5z").innerHTML = fa5;
    // document.querySelector("#show5zTitle").innerHTML = "第1针：</br>第2针：</br>第3针：</br>第4针：</br>第2针：";
    layer.open({
        content: '已计算！',
        time: 2,
        skin: 'msg',
        anim: 'scale'
    });
}


function addDay(dayNumber, date) {
    // 计算日期添加天数后的日期
    date = date ? date : new Date();
    var ms = dayNumber * (1000 * 60 * 60 * 24)
    var newDate = new Date(date.getTime() + ms);
    return newDate.Format("yyyy-MM-dd");
}


// 重置
function resetData(){
    document.querySelector("#show211").innerHTML = "";
    document.querySelector("#show5z").innerHTML = "";
    layer.open({
        content: '已重置！',
        time: 2,
        skin: 'msg',
        anim: 'scale'
    });
}

// 显示答案
function showAnswer(_this){    
    $(_this).find(".second-title-icon").toggleClass("second-title-iconOpen");
    $(_this).next("ul").toggle();
}