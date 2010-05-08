window.extraFrames = window.extraFrames || [];
window.fs = {};

function setupFrame(frame, content, cb) {
  var name = $(frame).attr("name");
  $.log(name);
  $.log(fs[name]);
  (fs[name] || window[name]).SC.ready(function() {
    fs[name] = fs[name] || window[name].getExports();
    $.log(fs[name]);
    fs[name].honk();
    fs[name].clearEvents();
    fs[name].setCode(content||"");
    fs[name].onCodeChange(cb);
  });
};

exports.applyFrame = function(el, content, opts, cb) {
  // look for a frame in our stable
  $.log(window.extraFrames, window.extraFrames.length)
  if (window.extraFrames.length > 0) {
    var frame = window.extraFrames.pop();
      $.log("reuse frame", frame)
      // setupFrame(this, content, cb)
  } else {
    // make frame html
    var name = Math.random().toString().split(".").pop(), 
      frame = $('<iframe name="' + name + '" src="bespin.html"></iframe>');
      $.log("new frame")
  }
  $(frame).load(function() {
    setupFrame(this, content, cb)
  });
  $(el).append(frame);
};

exports.cleanupFrames = function(el) {
  $.log("cleanup")
  var frames = [];
  $("iframe", el).each(function() {
    if ( this.parentNode ) {
      this.parentNode.removeChild( this );
    }  
    frames.push(this);
  });

  window.extraFrames = window.extraFrames.concat(frames);
  $.log(window.extraFrames)
};
