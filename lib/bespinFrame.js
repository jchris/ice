window.extraFrames = window.extraFrames || [];
window.fs = {};


function setupFrame(frame, el, cb) {
  var name = $(frame).attr("name");
  var content = fs[name];
  $.log(el, $$(el))
  $.log(name);
  var win = $(frame)[0].contentWindow;
  $.log(win);
    win.postMessage(content, '*');    
    $.log("win");
  // todo connect to frame listener
};

exports.applyFrame = function(el, content, opts, cb) {
  $.log(el, $$(el))
  if (window.extraFrames.length > 0) {
    var frame = window.extraFrames.pop();
    fs[$(frame).attr("name")] = content;
      $.log("reuse frame", frame)
      // setupFrame(this, content, cb)
  } else {
    // make frame html
    var name = Math.random().toString().split(".").pop(), 
      frame = $('<iframe name="' + name + '" src="bespin.html"></iframe>');
      fs[name] = content;
      // setupFrame(frame, content, cb)
      $(frame).load(function() {
        setupFrame(frame, el, cb);
      });
      $.log("new frame")
  }
  setTimeout(function() {
  },2000);


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
