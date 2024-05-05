function MDCalc() {
    var drug1 = $('#drug1').val();
    var drug1_unit = $('#drug1_unit').val();
    var drug2_unit = $('#drug2_unit').val();
    var drug2 = '';
    if (drug1) {
        drug2 = drug1 * drug2_unit / drug1_unit;
        $('#result').val(Round(drug2, 2));
    } else {
        $('#result').val('');
    }
}

