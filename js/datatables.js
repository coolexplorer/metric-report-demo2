// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#ccpProfile').DataTable({
    data: testProfile,
    columns: [
      { data: 'totalCCU' },
      { data: 'CCU' }
    ],
    paging: false,
    searching: false,
    info: false
  });
});

// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#testProfile').DataTable({
    data: testProfile,
    columns: [
      { data: 'targetServer' },
      { data: 'testStartTime' },
      { data: 'duration' },
      { data: 'rampupDuration' }
    ],
    paging: false,
    searching: false,
    info: false
  });
});

// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#serverMetric').DataTable({
    pageLength: 100,
    data: serverMetric,
    columns: [
      { data: 'serviceName' },
      { data: 'cpuCriteria' },
      { data: 'cpu' },
      { data: 'memCriteria' },
      { data: 'memory' }
    ]
  });
});

