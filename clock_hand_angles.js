// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

// For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.

// Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

function clockHandAngles(seconds){
    var hour = seconds/3600;
    var minute = seconds%3600/60;
    var second = (seconds%3600)%60;
    var deg1 = Math.ceil(hour*(360/12));
    var deg2 = Math.ceil(minute*(360/60));
    var deg3 = Math.ceil(second*(360/60));
    if (deg1>360){
      deg1 = deg1%360;
    };
    return[deg1, deg2, deg3];
  };
  
  clockHandAngles(50000);