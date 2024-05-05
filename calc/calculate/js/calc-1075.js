function MDCalc(z) {
    var pt = z.pt;
    var pt_aver = z.pt_aver;
    var isi = z.isi;

    var value = Math.pow(pt / pt_aver, isi);
    Answer(Round(value, 1));
}