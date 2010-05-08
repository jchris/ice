function(e) {
  var ddoc = $$(this).app.doc;
  var bespinFrame = $$(this).app.require("lib/bespinFrame");
  var opts = {
    syntax : "js"
  };
  $(".edit", this).each(function() {
    var t, c = ddoc, path = this.getAttribute('data-path').split('.');
    path.forEach(function(p) {t = c; c = c[p];});
    var top = path.pop();
    bespinFrame.applyFrame(this, c, opts, function(code) {
      t[top] = code;
    });
  });  
}
