chart().day_sb('x').power_curve(300, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('5min').x_axis({label: 'Stress Balance (SB)'}).y_axis({label: 'Peak Power (watts)'}).color('red');
chart().day_sb('x').power_curve(600, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('10min').color('orange').on(-1);
chart().day_sb('x').power_curve(1200, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('20min').color('yellow').on(-1);
chart().day_sb('x').power_curve(1800, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('30min').color('green').on(-1);
chart().day_sb('x').power_curve(3000, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('50min').color('blue').on(-1);
chart().day_sb('x').power_curve(3600, 'y').group_by(function(ride) {
    var sb_bin = Math.floor(ride.summary.day_sb / 10) * 10;
    return {x: sb_bin, x2: sb_bin + 10};
}).aggregate(max).line().name('60min').color('purple').on(-1)
