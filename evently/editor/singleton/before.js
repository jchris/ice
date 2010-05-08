function(e, params) {
  // create a bespin div if one doesn't exist
  if ($("#bespin", this).length == 0) {
    $(this).append($(''));
  }
  // load it with the path from the doc
  var ps = params.path.split('.');
  var ddoc = $$(this).app.doc;
  
  var t, c = ddoc, path = this.getAttribute('data-path').split('.');
  ps.forEach(function(p) {t = c; c = c[p];});
  var top = path.pop();
  bespin.value = c;
  $("this")
};