function(e, params) {
  var ddoc = $$(this).app.doc, name = params.name;
  return {
    name : name,
    docid : ddoc._id,
    rand : Math.random().toString().split(".").pop()
  };
};
