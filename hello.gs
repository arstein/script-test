function helloApp() { 
  // get current document
   var doc = DocumentApp.create('created with clasp');
  
  // set footer text
  doc.addFooter().appendParagraph(new Date().toDateString()); 
}