function(e, params) {
  var ddoc = $$(this).app.doc, name = params.name;
  return {
    name : name,
    rand : Math.random().toString().split(".").pop()
  };
};
