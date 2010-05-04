function() {
  $.log("bespin!")
  // .bespin();
  tiki.require('embedded').useBespin($(".edit", this)[0]);
  tiki.require('embedded').useBespin($(".edit", this)[1]);
  
};