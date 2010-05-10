function(e, params) {
  var events = [], ddoc = $$(this).app.doc, ps = params.path.split('.');
  var t, c = ddoc.evently;
  ps.forEach(function(p) {t = c; c = c[p];});
  // $.forIn(ddoc.evently[name], function(k, v) {
  //   events.push({
  //     event : k
  //   });
  // });
  // $.log(events)
  var design = $$(this).app.require("lib/design");
  var v = {
    name : name,
    fields : design.eventlyCodes(c)
  };
  // $.log(v);
  return v;
};