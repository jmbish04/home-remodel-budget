/**
 * The Monolith: Sheet Agent Engine with Native Function Calling
 * Runtime: Google Apps Script
 */

// Initialize Custom Menu
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Architect Engine')
    .addItem('Open Renovation Agent', 'showSidebar')
    .addToUi();
}

// Inject and Display Sidebar Canvas
function showSidebar() {
  var html = HtmlService.createTemplateFromFile('Sidebar')
    .evaluate()
    .setTitle('Renovation Agent Core')
    .setWidth(400);
  SpreadsheetApp.getUi().showSidebar(html);
}

