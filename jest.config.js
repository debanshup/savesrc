module.exports = {
    reporters: [
      "default",
      ["jest-html-reporter", {
        outputPath: "./src/test/reports/report.html",
        pageTitle: "Test Report"
      }]
    ]
  };
  