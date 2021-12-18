process.env.SERVICE_ENDPOINT = 'https://7udsjp16qa.execute-api.us-west-2.amazonaws.com';

module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test"],
  testMatch: ["**/*.test.js"],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "test-reports",
        outputName: "test-report.xml"
      }
    ]
  ]
}
