/**
 * @author zhanghongliang
 * @version 2017年11月24日
 * @desc
 */

function getWxConfig(shareTitle, shareDesc, imgUrl) {
    var _url = location.href.split('#')[0];
    $.ajax({
        url: '//wxpay.medlive.cn/api.php?c=user&action=getSignPackage&domain=test',
        dataType: 'jsonp',
        data: {
            url: encodeURIComponent(_url)
        },
        success: function (o) {
            wx.config({
                debug: false,
                appId: o.data.appId,
                timestamp: o.data.timestamp,
                nonceStr: o.data.nonceStr,
                signature: o.data.signature,
                jsApiList: [
                    'checkJsApi',
                    'hideMenuItems',
                    'updateAppMessageShareData',
                    'updateTimelineShareData']
            });


            //通过ready接口处理成功验证
            wx.ready(function () {
                //隐藏某些操作
                wx.hideMenuItems({
                    menuList: ["menuItem:copyUrl", "menuItem:share:qq", "menuItem:share:weiboApp",
                        "menuItem:share:facebook", "menuItem:share:QZone", "menuItem:openWithQQBrowser",
                        "menuItem:openWithSafari", "menuItem:share:email"]
                });
                /**
                 * 分享给朋友
                 */
                wx.updateAppMessageShareData({
                    debug: false,
                    title: shareTitle, // 分享标题
                    desc: shareDesc, // 分享描述
                    link: _url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: imgUrl, // 分享图标
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        //$.alert("分享成功!");
                    },
                    cancel: function () {
                        //$.alert("取消成功!");
                        // 用户取消分享后执行的回调函数
                    }
                });
                /**
                 * 分享到朋友圈
                 */
                wx.updateTimelineShareData({
                    debug: false,
                    title: shareDesc, // 分享标题 标题不能为空，最多32个汉字（2个英文字符算1个汉字，2个英文状态下的标点符号算1个汉字）。
                    link: _url,
                    imgUrl: imgUrl,
                    success: function () {
                        // 用户确认分享后执行的回调函数
                        //$.alert("分享成功");
                    },
                    cancel: function () {
                        // 用户取消分享后执行的回调函数
                        //$.alert("分享失败");
                    }
                });

            });
        }
    });
}

function shareCommon(shareDesc) {
    var url = location.href.split('#')[0];
    if (url.indexOf('/calc') > -1) {
        if (!shareDesc) {
            shareDesc = "感知世界医学脉搏，助力中国临床决策";
        }
        getWxConfig("医脉通医学公式", shareDesc, "//huodong.medlive.cn/calc_tools/images/calc.jpg");
    }
}
