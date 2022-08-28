time_types = {
    "R": "relative",
    "t": "short time",
    "T": "long time",
    "d": "short date",
    "D": "long date",
    "f": "long date short time",
    "F": "long date weekday short time"
}

dtp = null;

$(document).ready(() => {
    function setTimestamp() {
        unix_time = new Date(dtp.val()).getTime() / 1000;
        time_type = $("#dropdown-time-types").val()
        timestamp = "<t:" + unix_time +
            ":" + time_type + ">";
        $("#timestamp").val(timestamp)
    }

    timestamp;

    for (time_type in time_types) {
        $("#dropdown-time-types").append($('<option value="' + time_type + '">' + time_types[time_type] + '</option>'));
    }

    $("#dropdown-time-types").change(setTimestamp);

    dtp = $('#dtp').datetimepicker({
        icons: {
            time: 'fa fa-clock',
            date: 'fa fa-calendar',
            up: 'fa fa-chevron-up',
            down: 'fa fa-chevron-down',
            previous: 'fa fa-chevron-left',
            next: 'fa fa-chevron-right',
            today: 'fa fa-crosshairs',
            clear: 'fa fa-trash-o',
            close: 'fa fa-times'
        },
        sideBySide: true,
        format: "YYYY MM DD, hh:mm a",
        defaultDate: Date.now(),
        showTodayButton: true
    }).on("dp.change", function () {
        setTimestamp();
    });

    $("#timestamp").click(() => {
        navigator.clipboard.writeText(timestamp);
    });
    $("#timezone").text(Intl.DateTimeFormat().resolvedOptions().timeZone);
    setTimestamp();
}
);