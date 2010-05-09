function(e, params) {
  // create a bespin div if one doesn't exist
  if ($("#bespin", this).length == 0) {
    $(this).append($(''));
  }
  // load it with the path from the doc
  var ps = params.path.split('.');  
  var t, c = $$(this).app.doc;
  ps.forEach(function(p) {t = c; c = c[p];});
  var top = ps.pop();
  $("#bespinwrap").empty().append($("<pre></pre>").text(c));
  // bespin.value = c;
};