function MDCalc(z) {
    var qty = z.tbsa * z.weight * 4;
    $('.result-list').show();
    $('#resultmsg11').html(Round(qty, 0));
    $('#resultmsg41').html(Round(qty / 2, 0));
    $('#resultmsg51').html(Round(qty / 2 / 16, 2));
    if (!!$('#hour').val() && !!$('#f').val()) {
        $('#resultmsg21').html(Round(qty / 2 - z.f, 0));
        $('#resultmsg31').html(Round((qty / 2 - z.f) / (8 - z.hour), 2));
        $('#resultmsg22').html('起始补液量(前' + Round(8 - z.hour, 0) + 'h)');
        $('#resultmsg32').html('起始补液量速度(前' + Round(8 - z.hour, 0) + 'h)');
    } else {
        $('#resultmsg21').html('-');
        $('#resultmsg31').html('-');
        $('#resultmsg22').html('起始补液量(前8h)');
        $('#resultmsg32').html('起始补液量速度(前8h)');
    }
}

