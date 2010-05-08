function(e) {
  var name = this.name, ddoc = $$(this).app.doc;
  var view = e.data.args[1].name;
  var vtype = name.split('.').pop();
  $.log("onload iframe",  view, name);
  window[name].SC.ready(function() {
    window[name].setCode(ddoc.views[view][vtype]||"");
    window[name].onCodeChange(function(code) {
      ddoc.views[view][vtype] = code;
    });
  });
};