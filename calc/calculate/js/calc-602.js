function MDCalc(z) {
    //console.log(ch(z));
    var arr = ch(z);
    Answer1(arr[1]);
    Answer2(arr[2]);
    Answer3(arr[3]);
    Answer4(arr[3]);
}

function ch(z) {
    var i0 = 0;
    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    $('input:checked').each(function () {
        var arr = $(this).val().split("_");
        // console.log(arr)
        var v0 = parseInt(arr[0]);
        var v1 = parseInt(arr[1]);
        var v2 = parseInt(arr[2]);
        var v3 = parseInt(arr[3]);
        var n0 = v0;
        var n1 = v1;
        var n2 = v2;
        var n3 = v3;
        i0 = i0 + n0;
        i1 = i1 + n1;
        i2 = i2 + n2;
        i3 = i3 + n3;
        end = [i0, i1, i2, i3];
    });
    return end;
}