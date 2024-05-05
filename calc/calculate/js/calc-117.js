function MDCalc() {
    var en1 = $('#energy1').val();
    var en1_unit = $('#energy1_unit').val();
    var en2_unit = $('#energy2_unit').val();
    var en2 = '';
    if (en1) {
        if (en1_unit == 'kcal') {
            en1 = en1 * 1000;
        } else if (en1_unit == 'j') {
            en1 = en1 / 4.1868;
        } else if (en1_unit == 'kj') {
            en1 = en1 * 1000 / 4.1868;
        }

        if (en2_unit == 'cal') {
            en2 = en1;
        } else if (en2_unit == 'kcal') {
            en2 = en1 / 1000;
        } else if (en2_unit == 'j') {
            en2 = en1 * 4.1868;
        } else if (en2_unit == 'kj') {
            en2 = en1 * 4.1868 / 1000;
        }
        $('#result').val(Round(en2, 3));
    } else {
        $('#result').val('');
    }
}

