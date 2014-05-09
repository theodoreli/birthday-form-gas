// Remember, this code is considered server side

var DATA_SPREADSHEET_ID = "1sgfS2VM-0N1stetAda2Rf459SL6dxu7xo4ztSBmdiwo";
var spreadSheet = SpreadsheetApp.openById(DATA_SPREADSHEET_ID);

// Script-as-app template. *** do Get is to compile template data with based on specific cells.
function doGet() {
  var t = HtmlService.createTemplateFromFile('newrelic');
  var arrayValuesRow2;
  var header;
  var desc;
  
  sheetTemplate = spreadSheet.getSheets()[1];
  arrayValuesRow2 = sheetTemplate.getDataRange().getValues()[1];
  header = arrayValuesRow2[0];
  desc = arrayValuesRow2[1];
  
  t.data = {};
  t.data.header = header;
  t.data.desc = desc;
  
  return t.evaluate()
    .setSandboxMode(HtmlService.SandboxMode.NATIVE);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function gsProcessInput(input) {
  var dataStore = spreadSheet.getSheets()[0];
  
  dataStore.appendRow(input);
}
