function(e) {
  var name = this.name, ddoc = $$(this).app.doc;
  var evently = e.data.args[1].name;
  var key = name.split('.')
  var ev = key[1];
  var field = key[2];
  window[name].SC.ready(function() {
    window[name].setCode(ddoc.evently[evently][ev][field]||"");
    window[name].onCodeChange(function(code) {
      ddoc.evently[evently][ev][field] = code;
    });
  });
};