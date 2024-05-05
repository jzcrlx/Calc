function MDCalc(z) {
    var qty = z.tbsa * z.weight * 1.5 + 2000;
    $('.result-list').show();
    $('#resultmsg11').html(Round(qty, 1));
    $('#resultmsg12').html(Round(z.tbsa * z.weight * 1, 1));
    $('#resultmsg13').html(Round(z.tbsa * z.weight * 0.5, 1));
    $('#resultmsg14').html('2000');
    if (!!$('#hour').val() && !!$('#f').val()) {
        $('#resultmsg21').html(Round(qty / 2 - z.f, 0));
        $('#resultmsg22').html(Round((qty / 2 - z.f) / (8 - z.hour), 1));
        $('#label21').html('起始补液量(前' + Round(8 - z.hour, 0) + 'h)');
        $('#label22').html('起始补液量速度(前' + Round(8 - z.hour, 0) + 'h)');
    } else {
        $('#resultmsg21').html('-');
        $('#resultmsg22').html('-');
        $('#label21').html('起始补液量(前8h)');
        $('#label22').html('起始补液量速度(前8h)');
    }
    $('#resultmsg31').html(Round(qty / 2, 1));
    $('#resultmsg32').html(Round(qty / 2 / 16, 1));

    $('#resultmsg41').html(Round(z.tbsa * z.weight / 2, 1));
    $('#resultmsg42').html(Round(z.tbsa * z.weight * 0.25, 1));
    $('#resultmsg43').html('2000');
}

