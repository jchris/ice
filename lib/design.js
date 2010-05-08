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

exports.evently = function(ddoc) {
  var evs = [], fields = ["path","before","query","async","mustache", "data", "after"];
  $.forIn(ddoc.evently, function(k, v) {
    // todo make it intelligent about vendor
    var events = [];
    $.forIn(v, function(k2, v) {
      events.push({
        event : k2,
        fields : fields.map(function(f) {
          return {
            field : f,
            blank : !v[f]
          };
        })
      });
    });
    evs.push({
      name : k,
      events : events
    });
  });
  return evs;
};