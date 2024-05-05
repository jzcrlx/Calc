/**
 * Square root of weekly warfarin dose （mg）=
 * 5.6044- 0.2614 x Age in decades+ 0.0087 x Height in cm+ 0.0128 x Weight in kg
 * - 0.8677 x VKORC1 A/G- 1.6974 x VKORC1 A/A- 0.4854 x VKORC1 genotype unknown
 * - 0.5211 x CYP2C9 *1/*2- 0.9357 x CYP2C9 *1/*3- 1.0616 x CYP2C9 *2/*2- 1.9206 x CYP2C9 *2/*3- 2.3312 x CYP2C9
 * *3/*3- 0.2188 x CYP2C9 genotype unknown
 * - 0.1092 x Asian race- 0.2760 x Black or African American- 0.1032 x Missing or Mixed race
 * + 1.1816 x Enzyme inducer status- 0.5503 x Amiodarone status
 * 结果平方得到周剂量
 * @param z
 * @constructor
 */
function MDCalc(z) {
    var age = z.age;
    var height = z.height;
    var weight = z.weight;
    var vkorc1 = z.vkorc1;
    var enzyme = z.enzyme;
    var amio = z.amio;
    if (vkorc1 == 1) {
        vkorc1 = 1.6974;
    } else if (vkorc1 == 2) {
        vkorc1 = 0.8677;
    } else if (vkorc1 == 4) {
        vkorc1 = 0.4854;
    } else {
        vkorc1 = 0;
    }

    var race = z.race;
    if (race == 1) {
        race = 0.1092;
    } else if (race == 2) {
        race = 0.2760;
    } else if (race == 4) {
        race = 0.1032;
    } else {
        race = 0;
    }

    var cyp2c9 = z.cyp2c9;
    if (cyp2c9 == 1) {
        cyp2c9 = 0;
    } else if (cyp2c9 == 2) {
        cyp2c9 = 0.5211;
    } else if (cyp2c9 == 3) {
        cyp2c9 = 0.9357;
    } else if (cyp2c9 == 4) {
        cyp2c9 = 1.0616;
    } else if (cyp2c9 == 5) {
        cyp2c9 = 1.9206;
    } else if (cyp2c9 == 6) {
        cyp2c9 = 2.3312;
    } else if (cyp2c9 == 7) {
        cyp2c9 = 0.2188;
    } else {
        cyp2c9 = 0;
    }

    var value = 5.6044 - 0.2614 * Math.floor(age / 10) + 0.0087 * height + 0.0128 * weight - vkorc1 - cyp2c9 - race + 1.1816 * enzyme - 0.5503 * amio;
    Answer(Round(value * value, 0))
}

function showInfo(title) {
    var msg = "IWPC计算中，诱导剂为：利福平、苯妥英、卡马西平";
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
    return false;
}