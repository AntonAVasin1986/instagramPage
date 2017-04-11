define({
    calculateCreatedTimeRange: function(postTime) {
        var currentSeconds = new Date().getTime()/1000;
        var range = currentSeconds - +postTime;

        var value = range;
        if (value > 59) {
            value = value / 60;
            if (value > 59) {
                value = value / 60;
                if (value > 23) {
                    value = value / 24;
                    if (value > 6) {
                        value = value / 7;
                        return Math.floor(value) + ' w';
                    }
                    return Math.floor(value) + ' d';
                }
                return Math.floor(value) + ' h';
            }
            return Math.floor(value) + ' m';
        }
        return Math.floor(value) + ' s';
    }
});