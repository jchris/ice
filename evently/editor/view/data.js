function(e, params) {
  var ddoc = $$(this).app.doc, name = params.name;
  return {name : name, map : ddoc.views[name].map, reduce : ddoc.views[name].reduce};
};
