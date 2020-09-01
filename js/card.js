var ctx = document.getElementById("milestone");
ctx.innerHTML = testProfile[0]["milestone"];

var ctx = document.getElementById("totalCCU");
ctx.innerHTML = testProfile[0]["totalCCU"];

var ctx = document.getElementById("testStartTime");
ctx.innerHTML = changeDateString(testProfile[0]["testStartTime"]);

var ctx = document.getElementById("duration");
ctx.innerHTML = testProfile[0]["duration"];