    function phoneValidation(val) {
        var phoneno = /^(?:\+?88)?01[13-9]\d{8}$/;
        if (val.match(phoneno)) {
            return true;
        } else {
            return false;
        }
    }
