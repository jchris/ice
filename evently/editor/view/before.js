function() {
  $.log("before view")
  var bespinFrame = $$(this).app.require("lib/bespinFrame");
  bespinFrame.cleanupFrames(this);
};
