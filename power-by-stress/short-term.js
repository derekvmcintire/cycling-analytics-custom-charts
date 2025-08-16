chart().day_sts('x').power_curve(300, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('5min').x_axis({label: 'Short Term Stress (STS)'}).y_axis({label: 'Peak Power (watts)'}).color('red');
chart().day_sts('x').power_curve(600, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('10min').color('orange').on(-1);
chart().day_sts('x').power_curve(1200, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('20min').color('yellow').on(-1);
chart().day_sts('x').power_curve(1800, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('30min').color('green').on(-1);
chart().day_sts('x').power_curve(3000, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('50min').color('blue').on(-1);
chart().day_sts('x').power_curve(3600, 'y').group_by(function(ride) {
    var sts_bin = Math.floor(ride.summary.day_sts / 10) * 10;
    return {x: sts_bin, x2: sts_bin + 10};
}).aggregate(max).points().name('60min').color('purple').on(-1)
