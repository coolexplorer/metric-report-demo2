var element = document.getElementById("cpu")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(cpuData), ""));
}

var element = document.getElementById("memory")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(memoryData), "GB"));
}

var element = document.getElementById("network_in_byte")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(networkInByteData), "KB"));
}

var element = document.getElementById("network_out_byte")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(networkOutByteData), "KB"));
}

var element = document.getElementById("network_in_packet")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(networkInPacketData), ""));
}

var element = document.getElementById("network_out_packet")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(networkOutPacketData), ""));
}

var element = document.getElementById("gc_count_sum")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(gcCountSumData), ""));
}

var element = document.getElementById("gc_count_avg")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(gcCountAvgData), ""));
}

var element = document.getElementById("gc_time_spent_sum")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(gcTimeSpentSumData), ""));
}

var element = document.getElementById("gc_time_spent_avg")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(gcTimeSpentAvgData), ""));
}

var element = document.getElementById("heap_max")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(heapMaxData), "MB"));
}

var element = document.getElementById("heap_used")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(heapUsedData), "MB"));
}

var element = document.getElementById("non_heap_used")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(nonHeapUsedData), "MB"));
}

var element = document.getElementById("threads")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(threadsData), ""));
}

var element = document.getElementById("rpc")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(rpcData), ""));
}

var element = document.getElementById("rpc_tps")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(rpcTpsData), ""));
}

var element = document.getElementById("rpc_cumulative")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(rpcCumulativeData), ""));
}

var element = document.getElementById("rpc_cumulative_counts")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(rpcCumulativeCountsData), ""));
}

var element = document.getElementById("batch")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(batchData), ""));
}

var element = document.getElementById("batch_tps")
if (element != null) {
    new Chart(element.getContext('2d'), getChartConfig(makeDataSets(batchTpsData), ""));
}