function(e, params) {
  $.log(params)
  var db, id, 
    widget = this, 
    parts = params.splat[0].replace(/^\//,'').split("/");
  db = parts.shift();
  id = parts.join("/");
  $.log(db, id)
  $.couch.db(db).openDoc(id, {
    success : function(doc) {
      widget.trigger("design", [db, doc]);      
    }
  });
};
