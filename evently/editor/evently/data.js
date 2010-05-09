function(e, params) {
  var events = [], ddoc = $$(this).app.doc, name = params.name;
  $.forIn(ddoc.evently[name], function(k, v) {
    events.push({
      event : k
    });
  });
  $.log(events)
  var design = $$(this).app.require("lib/design");
  
  var v = {
    name : name,
    evently : design.evently(ddoc.evently[name]),
    path : ["evently",name,"event"].join('/')
  };
  $.log(v)
  return v;
};