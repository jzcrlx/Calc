function getLocalStorage(name) {
    if (!window.localStorage) {
        console.log("浏览器不支持localstorage");
        return [];
    } else {
        let storage = window.localStorage;

        //第三种方法读取
        let str = storage.getItem(name);
        // console.log(JSON.parse(str || "[]"));
        return JSON.parse(str || "[]");
    }
}

function setLocalStorage(name, data) {
    if (!window.localStorage) {
        console.log("浏览器不支持localstorage");
    } else {
        let storage = window.localStorage;
        localStorage.setItem(name, JSON.stringify(data));
    }
}

//收藏
function likeToPage(strFileName, strTitle) {
    let getHaveData = new Array();
    getHaveData = getLocalStorage("ko_like");
    //循环遍历子项，确认是否有收藏
    let blIsHave = false;
    for (let i = 0; i < getHaveData.length; i++) {
        if (getHaveData[i].strFileName == strFileName) {
            //已有收藏,取消收藏
            blIsHave = true;
            getHaveData.splice(i, 1);
            setLocalStorage("ko_like", getHaveData);
            return true;
        }
    }

    if (blIsHave == false) {
        //没有收藏，新增收藏
        let tempNewArr = { 'strFileName': strFileName, 'strTitle': strTitle };
        getHaveData.push(tempNewArr);
        setLocalStorage("ko_like", getHaveData);
        return false;
    }
}


//检测是否已被收藏
function haveLike(strFileName) {
    let getHaveData = new Array();
    getHaveData = getLocalStorage("ko_like");
    let index = getHaveData.findIndex((res) => res.strFileName == strFileName);
    if (index >= 0) {
        return true;
    } else {
        return false;
    }
}


//最近使用
function historyToPage(strFileName, strTitle) {
    //修改title
    document.querySelector("title").textContent = strTitle + " - 急诊超人老谢 - 医学计算工具";    
    let getHaveData = new Array();
    let arr = new Array();
    getHaveData = getLocalStorage("ko_his");
    //循环遍历子项，确认是否有最近使用历史   
    arr = getHaveData.filter((res) => res.strFileName != strFileName);
    arr.splice(0, 0, { 'strFileName': strFileName, 'strTitle': strTitle });
    arr = arr.splice(0, 30); //只保留30项历史记录    
    setLocalStorage("ko_his", arr);
}

function goBack() { 
    // console.log(window.performance.getEntries());
      if(window.performance.navigation.type == 0){
        //0表示当前页面是通过点击别的链接进入的
        //有浏览历史时返回上一页
        history.go(-1);
    }else{
        //没有浏览历史时返回首页                
        window.location.href ="../index.html";
    }
}