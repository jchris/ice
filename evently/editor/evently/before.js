function() {
  $.log("before evently")
  var bespinFrame = $$(this).app.require("lib/bespinFrame");
  bespinFrame.cleanupFrames(this);
};
