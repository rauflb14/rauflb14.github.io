formats = { "month": 2.5, "days": 30, "h": 24, "min": 60, "sec": 60 }
$(document).ready(() => {
    console.log("document ready");
    $("#cycles").keyup(() => {
        let cycles = Number($("#cycles").val());
        for (key in formats) {
            cycles *= formats[key];
            $("#" + key).val(Math.trunc(cycles));
            cycles -= Math.trunc(cycles);
        }
    });

    $("#convertToCycles").click(() => {
        let seconds = 0;
        for (key in formats) {
            seconds = seconds * formats[key] + Number($("#" + key).val());
        }

        let val = seconds;
        Object.keys(formats).reverse().forEach((key, index, arr) => {
            if (index == arr.length - 1) {
                $("#" + key).val(val);
                return;
            }
            let value = val % formats[key];
            $("#" + key).val(value);
            val = (val - value) / formats[key];
        });

        let cycles = seconds;
        Object.values(formats).forEach((value, index, arr) => {
            if (value < 1) {
                return;
            }

            cycles /= value;
        });

        $("#cycles").val(cycles);
    });
});
