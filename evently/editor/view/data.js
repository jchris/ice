function(e, params) {
  $.log("data stash");
  var ddoc = $$(this).app.doc, name = params.name;
  return {
    path : ["views",name].join('.'), 
    map : ddoc.views[name].map, 
    urlmap : encodeURIComponent(ddoc.views[name].map),
    reduce : ddoc.views[name].reduce,
    urlreduce : encodeURIComponent(ddoc.views[name].reduce)
  };
};
