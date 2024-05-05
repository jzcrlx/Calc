// ======================================
// Project Name:dgcp
// Class Name:KINGYEE.common
// File Name:common.js
// Create Date:2012-8-22下午2:17:46
// ======================================
/**
 * 通用js方法
 * <ul>
 * <li>.format(d,f):格式化日期</li>
 * </ul>
 */
(function(window) {
	var KINGYEE = {};
	if (!window.KINGYEE) {
		window.KINGYEE = KINGYEE;
	} else {
		KINGYEE = window.KINGYEE;
	}
	var emptyFn = function() {};
	var config = {
		// 开发环境
		debug: true,
		// 调试
		console: window.console || {
			info: emptyFn,
			log: emptyFn,
			trace: emptyFn,
			debug: emptyFn,
			error: emptyFn

		}
	};
	KINGYEE.common = KINGYEE.common || config;

	/**
	 * 格式化日期
	 *
	 * @param d
	 *            日期
	 * @param f
	 *            格式 yyyy-MM-dd hh:mm:ss
	 */
	KINGYEE.common.format = function(d, f) {
		if (!f) {
			f = 'yyyy-MM-dd';
		}
		var o = {
			"M+": d.getMonth() + 1,
			"d+": d.getDate(),
			"h+": d.getHours(),
			"m+": d.getMinutes(),
			"s+": d.getSeconds(),
			"q+": Math.floor((d.getMonth() + 3) / 3),
			"S": d.getMilliseconds()
		}
		if (/(y+)/.test(f)) {
			f = f.replace(RegExp.$1, (d.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(f)) {
				f = f.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return f;
	}

})(window);


$(function() {
	$('.date_format').each(function() {
		var _this = $(this);
		var f = _this.attr('_format') || null;
		var value = "";
		if(this.nodeName == 'INPUT') {
			value = _this.val();			
			if (value && !isNaN(value)) {
				_this.val(KINGYEE.common.format(new Date(value * 1),f));
			}
		} else {
			value = _this.html();
			if (value && !isNaN(value)) {
				_this.html(KINGYEE.common.format(new Date(value * 1),f));
			}
		}
	});
});