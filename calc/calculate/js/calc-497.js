function MDCalc(z) {
    // console.log(z);
    var score = 0;
    for (var key in z) {
        if (key !== "result") {
            score += z[key];
        }
    }
    Answer(score);
}

function showInfo(field, title) {
    var msg = "";
    if (field === "饮食") {
        if (title === "独立") {
            msg = '食物摆在面前时，可自己取食。如需助具，必须能自己穿戴。如需切食物、撒盐面等，必须自己在一定时间内完成';
        }
    } else if (field === "床-椅移动") {
        if (title === "独立") {
            msg = '患者能独立、安全地进行床到轮椅和轮椅到床的动作';
        } else if (title === "需要帮助") {
            msg = '在活动的某一步骤需要极少帮助，或过程中需要口头指导';
        } else if (title === "需要较多帮助") {
            msg = '患者能独立坐起，但移动到椅上需大量帮助';
        }
    } else if (field === "个人卫生") {
        if (title === "独立") {
            msg = '能洗手、洗脸、梳头、刷牙、化妆、剃须，可用剃刀，必须能够自己从盛物屉柜中取出、安装、使用。女患者化妆';
        }
    } else if (field === "如厕") {
        if (title === "需要帮助") {
            msg = '患者因不平衡或在穿脱、解系衣物及使用手纸时需要帮助';
        } else if (title === "独立") {
            msg = '患者能独自上厕所，可用扶手支撑身体，解系衣服，使用手纸。使用便盆者须能将便器放到椅子上，倒大小便并冲洗干净';
        }
    } else if (field === "洗浴") {
        if (title === "独立") {
            msg = '患者可用澡盆、淋浴或擦浴洗澡，并且无论用哪种方式都能自己完成所有步骤，不需他人在场';
        }
    } else if (field === "平地行走") {
        if (title === "操作轮椅") {
            msg = '不能移动，但独立操作轮椅，能拐弯、转圈、将椅子移到桌前、床边或厕所内，至少能驱动轮椅45米';
        } else if (title === "独立") {
            msg = '在水平路面至少能独立行走45米。穿支具或假肢、使用杖。能自己扣、解支具，把支具放好';
        } else if (title === "需要帮助") {
            msg = '需要在上述条目中的任何一项得到帮助或指导，但至少行走45米';
        }

    } else if (field === "上下楼梯") {
        if (title === "需要帮助") {
            msg = '患者需要上述项目中的任何一项的帮助或指导';
        } else if (title === "") {
            msg = '患者能独立、安全地上下一层楼梯，可以使用扶手或栏杆、杖，但必须能够自己携带杖';
        }
    } else if (field === "穿脱衣服") {
        if (title === "需要帮助") {
            msg = '穿、脱衣服时，需要帮助，但患者必须自己能在一定的时间内完成一半作业。女患者的胸罩或腰带不列入评分';
        } else if (title === "独立") {
            msg = '患者能穿、脱、系所有的衣服。要求该活动包括穿、脱、系腰带、胸衣或支';
        }
    } else if (field === "排便控制") {
        if (title === "需要帮助") {
            msg = '需要帮助使用栓剂或灌肠剂，并且大便偶尔有失禁现象';
        } else if (title === "独立") {
            msg = '患者能控制大便，无失控现象，需要时能自己使用通便栓剂或灌肠剂';
        }
    } else if (field === "排尿控制") {
        if (title === "需要帮助") {
            msg = '偶尔有失禁，等不到取便盆或去厕所。使用特殊器具需要帮助';
        } else if (title === "独立") {
            msg = '在整个昼夜间患者都能控制小便，能独自穿戴特殊用具或便袋，并能清洁这些器具，使其保持干燥';
        }
    }
    layer.open({
        title: title,
        content: '<div style="text-align: justify">' + msg + '</div>',
        anim: 'scale',
        btn: '确定'
    });
}