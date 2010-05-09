exports.views = function(ddoc) {
  var views = [];
  $.forIn(ddoc.views, function(name, funs) {
    views.push({
      name : name,
      path : ["views",name]
    });
  });
  return views;
};

exports.evently = function(ev) {
  var evs = [], fields = ["path","before","query","async","mustache", "data", "after"];
  $.forIn(ev, function(k2, v) {
    evs.push({
      name : k2,
      fields : fields.map(function(f) {
        return {
          field : f,
          blank : !v[f]
        };
      })
    });
  });
  return evs;
};