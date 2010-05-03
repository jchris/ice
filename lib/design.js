exports.views = function(ddoc) {
  var views = [];
  $.forIn(ddoc.views, function(name, funs) {
    views.push({
      name : name
    });
  });
  return views;
};

exports.evently = function(ddoc) {
  var evs = [];
  $.forIn(ddoc.evently, function(name, funs) {
    // todo make it intelligent about vendor
    evs.push({
      name : name
    });
  });
  return evs;
};