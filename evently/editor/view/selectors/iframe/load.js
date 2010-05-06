function(e) {
  $.log("onload iframe",this, arguments)
  var name = this.name, ddoc = $$(this).app.doc;
  var view = e.data.args[1].name;
  var node = window[name].document.getElementById("edit");
  node.bespin.addEventListener('textChange', function() {
    ddoc.views[view][name] = window[name].getCode();
    // show the save button
  });
};