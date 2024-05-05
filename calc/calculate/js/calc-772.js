function MDCalc(z) {
    var alertStrings = "";
    var warningStrings = "";
    if (z.che0 === 0) {
        alertStrings += "- You have not confirmed patient identity";
    }
    if (z.che1 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You have not confirmed surgical site";
        } else {
            alertStrings += " -You have not confirmed surgical site";
        }
    }
    if (z.che2 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You have not confirmed the procedure";
        } else {
            alertStrings += " -You have not confirmed the procedure";
        }
    }
    if (z.che3 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You have not obtained consent";
        } else {
            alertStrings += " -You have not obtained consent";
        }
    }
    if (z.che4 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You have not marked the surgical site";
        } else {
            alertStrings += " -You have not marked the surgical site";
        }
    } else if (z.che4 === -1) {
        warningStrings = "-You have indicated that the surgical site is not marked - You have indicated that this is not applicable";
    }
    if (z.che5 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You have not completed the anaesthesia safety check";
        } else {
            alertStrings += " -You have not completed the anaesthesia safety check";
        }
    }
    if (z.che6 === 0) {
        if (alertStrings.length === 0) {
            alertStrings = "-You need to confirm the pulse oximeter is on the patient and functioning";
        } else {
            alertStrings += " -You need to confirm the pulse oximeter is on the patient and functioning";
        }
    }
    if (z.che7 === 1) {
        if (warningStrings.length === 0) {
            warningStrings = "-The patient has allergies. Take the required precautions";
        } else {
            warningStrings += " -The patient has allergies. Take the required precautions";
        }
    }
    if (z.che8 === 1) {
        if (alertStrings.length === 0) {
            alertStrings = "-The patient has a difficult airway or is at risk of aspiration and equipment/assistance is not available";
        } else {
            alertStrings += " -The patient has a difficult airway or is at risk of aspiration and equipment/assistance is not available";
        }
    } else if (z.che8 === 2) {
        if (warningStrings.length === 0) {
            warningStrings = "-You have indicated that the patient has a difficult airway/aspiration risk - You have indicated that equipment/assistance is available";
        } else {
            warningStrings += " -You have indicated that the patient has a difficult airway/aspiration risk - You have indicated that equipment/assistance is available";
        }
    }
    if (z.che9 === 1) {
        if (alertStrings.length === 0) {
            alertStrings = "-There is a risk of >500mL blood loss, or in children >7mL/kg and there is inadequate intravenous access or inadequate plan for fluids";
        } else {
            alertStrings += " -There is a risk of >500mL blood loss, or in children >7mL/kg and there is inadequate intravenous access or inadequate plan for fluids";
        }
    } else if (z.che9 === 2) {
        if (warningStrings.length === 0) {
            warningStrings = "-You have indicated a risk of >500 mL blood loss (>7mL/kg in children) - You have indicated adequate intravenous access and fluids planned";
        } else {
            warningStrings += " -You have indicated a risk of >500 mL blood loss (>7mL/kg in children) - You have indicated adequate intravenous access and fluids planned";
        }
    }
    Text1(alertStrings);
    Text2(warningStrings);
}
