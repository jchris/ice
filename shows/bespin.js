function(doc, req) {
  var parts = req.query.path.split('.');
  var format = req.query.format || "js";
  var target = doc;
  try {
    parts.forEach(function(p) {
      target = target[p];
    });    
  } catch(e) {
    target = "error: no code at "+req.query.path;
  }
  var Mustache = require("lib/mustache");
  return Mustache.to_html(this.templates.bespin, {
    code : JSON.stringify(target || ""),
    format : format
  });
};
