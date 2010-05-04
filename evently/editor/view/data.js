function(e, params) {
  var ddoc = e.data.args[0], name = params.name;
  $.log(ddoc)
  return {
    name : name,
    map : ddoc.views[name].map,
    reduce : ddoc.views[name].reduce
  }
};