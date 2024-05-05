function MDCalc(z) {
    //console.log(z);
    var alertStrings = "";
    var warningStrings = "";
    if (!z.che2) {
        if (warningStrings.length == 0) {
            warningStrings = "-The nurse has NOT verbally confirmed with team that the instrument, sponge, and needle counts are correct - You have indicated that this is not applicable";
        } else {
            warningStrings += "-The nurse has NOT verbally confirmed with team that the instrument, sponge, and needle counts are correct - You have indicated that this is not applicable";
        }
    }
    if (!z.che3) {
        if (warningStrings.length == 0) {
            warningStrings = "-The nurse has NOT verbally confirmed with team how the specimen is labeled (including patient name) - You have indicated that this is not applicable";
        } else {
            warningStrings += "-The nurse has NOT verbally confirmed with team how the specimen is labeled (including patient name) - You have indicated that this is not applicable";
        }
    }

    if (z.che1 === 0) {
        if (alertStrings.length == 0) {
            alertStrings = "-The nurse has NOT verbally confirmed with team the name of the procedure";
        } else {
            alertStrings += "-The nurse has NOT verbally confirmed with team the name of the procedure";
        }
    }
    if (z.che2 === 0) {
        if (alertStrings.length == 0) {
            alertStrings = "-The nurse has NOT verbally confirmed with team that the instrument, sponge, and needle counts are correct";
        } else {
            alertStrings += "-The nurse has NOT verbally confirmed with team that the instrument, sponge, and needle counts are correct";
        }
    }
    if (z.che3 === 0) {
        if (alertStrings.length == 0) {
            alertStrings = "-The nurse has NOT verbally confirmed with team how the specimen is labeled (including patient name)";
        } else {
            alertStrings += "-The nurse has NOT verbally confirmed with team how the specimen is labeled (including patient name)";
        }
    }
    if (z.che4 === 0) {
        if (alertStrings.length == 0) {
            alertStrings = "-The nurse has NOT verbally confirmed with team whether there are any equipment problems to be addressed";
        } else {
            alertStrings += "-The nurse has NOT verbally confirmed with team whether there are any equipment problems to be addressed";
        }
    }
    if (z.che5 === 0) {
        if (alertStrings.length == 0) {
            alertStrings = "-The surgeon, anaesthesia professional and nurse have NOT reviewed the key concerns for recovery and management of this patient";
        } else {
            alertStrings += "-The surgeon, anaesthesia professional and nurse have NOT reviewed the key concerns for recovery and management of this patient";
        }
    }
    Text2(warningStrings);
    Text1(alertStrings);
}
