function(e, params) {
  var ddoc = $$(this).app.doc, name = params.name;
  return {
    name : name,
    docid : ddoc._id
  };
};
