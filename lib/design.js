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

exports.eventlyAll = function(ddoc) {
  var all = [];
  $.forIn(ddoc.evently, function(name, e) {
    all.push({
      name : name
    })
  });
  return all;
};

exports.evently = function(ev) {
  var evs = [], fields = ["path","before","query","async","mustache", "data", "after"];
  $.forIn(ev, function(k2, v) {
    evs.push({
      event : k2,
      fields : fields.map(function(f) {
        return {
          field : f,
          blank : !v[f]
        };
      }).sort(function(f) {
        return f.blank;
      })
    });
  });
  return evs;
};