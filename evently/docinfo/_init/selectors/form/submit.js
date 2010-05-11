function(e) {
  e.preventDefault();
  var doc = $$(this).app.doc;
  $$(this).app.db.saveDoc(doc, {
    success : function(ok) {
      $("#docinfo").removeClass("dirty");
      $("#docinfo").trigger("_init", [doc]);
    }
  });
  return false;
};