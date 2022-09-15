    function milisecondsToHandM(x){

        var d = moment.duration(x, 'milliseconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return hours + "h " + mins + "m";
    }

    function secondsToHandM(x){

        var d = moment.duration(x, 'seconds');
        var hours = Math.floor(d.asHours());
        var mins = Math.floor(d.asMinutes()) - hours * 60;
        return hours + "h " + mins + "m";
    }
