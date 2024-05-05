// function getCookie(name) {
//     // 拆分 cookie 字符串
//     let cookieArr = document.cookie.split(";");
//     // 循环遍历数组元素
//     for (let i = 0; i < cookieArr.length; i++) {
//         let cookiePair = cookieArr[i].split("=");

//         /* 删除 cookie 名称开头的空白并将其与给定字符串进行比较 */
//         if (name == cookiePair[0].trim()) {
//             // 解码cookie值并返回
//             return decodeURIComponent(cookiePair[1]);
//         }
//     }
//     // 如果未找到，则返回null
//     return [];
// }

//获取cookie函数：
function getCookie(name) {
    //解码
    cookie = decodeURIComponent(document.cookie);
    var arr = cookie.split("; ");
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split("=");
        if (arr2[0] == name) {
            console.log(arr2[1]);

            if (arr2[1] == "") {

                return [];
            } else {
                console.log(JSON.parse(arr2[1]));
                return JSON.parse(arr2[1]);
            }

        }
    }
    // 如果未找到，则返回null
    return null;
}


//增加/修改cookie函数：
function setCookie(value) {
    //编码  把可能为中文的编码一下    
    value = encodeURIComponent(value);
    document.cookie = "ko_like_cookie=" + value + "; path=/; max-age=" + Number.MAX_SAFE_INTEGER;
}


function like(strFileName, strTitle) {

    let getHaveCookie = new Array;
    getHaveCookie = getCookie("ko_like_cookie");
    console.log(getHaveCookie);
    if (getHaveCookie == null) {
        //没有对应的cookie时
        let temp_Arr = JSON.stringify([
            strFileName + "|" + strTitle
        ]);
        setCookie(temp_Arr);
        // document.cookie = "ko_like_cookie=" + encodeURIComponent(temp_Arr) + "; path=/; max-age=" + Number.MAX_SAFE_INTEGER;
        console.log('没有对应的cookie');
    } else {
        //有对应的cookie时,循环遍历cookie中的子项，确认是否有收藏
        let blIsHave = false;
        for (let i = 0; i < getHaveCookie.length; i++) {
            console.log(getHaveCookie[i]);
            if (getHaveCookie[i].split("|")[0] == strFileName) {
                //已有收藏,取消收藏    
                blIsHave = true;
                getHaveCookie.splice(i, 1);
                break;
            }
        }

        if (blIsHave == false) {
            //没有收藏，新增收藏
            let tempNewArr = strFileName + "|" + strTitle;
            getHaveCookie.push(tempNewArr);
            getHaveCookie = JSON.stringify((getHaveCookie));
            console.log('没有收藏，新增收藏');
        }
        setCookie(getHaveCookie);
        // document.cookie = "ko_like_cookie=" + getHaveCookie + "; path=/; max-age=" + Number.MAX_SAFE_INTEGER;
        console.log('Ok');
    }

}