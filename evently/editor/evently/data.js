function(e, params) {
  var events = [], ddoc = $$(this).app.doc, name = params.name;
  $.forIn(ddoc.evently[name], function(k, v) {
    events.push({
      event : k
    });
  });
  $.log(events)
  return {
    name : name,
    path : ["evently",name,"event"].join('.')
  }
};