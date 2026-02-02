/**
 * Home Remodel Budget - Apps Script
 * Main entry point for the Apps Script project
 */

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index')
    .setTitle('Home Remodel Budget');
}

function getProjectData() {
  // TODO: Implement budget tracking logic
  return {
    message: 'Home Remodel Budget Tracker',
    projects: []
  };
}
