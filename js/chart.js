var ctx = document.getElementById("cpu").getContext('2d');
var cpuChart = new Chart(ctx, getChartConfig(makeDataSets(cpuData), ""));

var ctx = document.getElementById("memory").getContext('2d');
var memChart = new Chart(ctx, getChartConfig(makeDataSets(memoryData), "GB"));

var ctx = document.getElementById("network_in_byte").getContext('2d');
var networkInChart = new Chart(ctx, getChartConfig(makeDataSets(networkInByteData), "KB"));

var ctx = document.getElementById("network_out_byte").getContext('2d');
var networkOutChart = new Chart(ctx, getChartConfig(makeDataSets(networkOutByteData), "KB"));

var ctx = document.getElementById("network_in_packet").getContext('2d');
var networkInChart = new Chart(ctx, getChartConfig(makeDataSets(networkInPacketData), ""));

var ctx = document.getElementById("network_out_packet").getContext('2d');
var networkOutChart = new Chart(ctx, getChartConfig(makeDataSets(networkOutPacketData), ""));