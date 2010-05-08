# copy the set
function(e) {
  var bespinFrame = $$(this).app.require("bespinFrame");
  var opts = bespinFrame.parseOpts(e);
  $(".edit").each(function() {
    // parse the path to data object
    this.attr()
    var options = this.getAttribute('data-');
    
    var fopts = bespinFrame.frameOpts(e);
    bespinFrame.applyFrame(this, opts, fopts);
  });  
};
