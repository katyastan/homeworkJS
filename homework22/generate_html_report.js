var reporter = require('cucumber-html-reporter');

var options = {
    theme: 'bootstrap',
    jsonDir: 'test_report/',
    output: 'test_report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        "App Version": "0.1.2",
        "Browser": "Chrome 155.0",
        "Platform": "Macos 10",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    },
    failedSummaryReport: true,
};

reporter.generate(options);

