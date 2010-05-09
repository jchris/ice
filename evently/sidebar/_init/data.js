function(e, db, doc) {
  // load the doc and use it to trigger something
  var design = $$(this).app.require("lib/design");
  var path = [db, doc._id].join('/');
  var futonPath = "/_utils/document.html?"+path;
  return {
    path : "/"+path,
    futonPath : futonPath,
    views : design.views(doc),
    evently : design.eventlyAll(doc)
  }
};
