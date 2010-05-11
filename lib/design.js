exports.views = function(ddoc) {
  var views = [];
  $.forIn(ddoc.views, function(name, funs) {
    views.push({
      name : name,
      path : ["views",name]
    });
  });
  return views;
};

exports.eventlyAll = function(ddoc) {
  var all = [];
  $.forIn(ddoc.evently, function(name, e) {
    var events = [];
    $.forIn(e, function(k, v) {
      events.push({event:k})
    });
    all.push({
      name : name,
      events : events
    })
  });
  return all;
};

function format() {};

exports.eventlyCodes = function(v) {
  if (typeof v == "string") {
    return [{
      field : "string",
      value : v,
      urlval : encodeURIComponent(v),
      about : "a raw javascript string"
    }];
  }
  var fields = ["path","before","query","async","mustache", "data", "after"];
  var about = {
    path : "triggers this event with $.pathbinder. example: #/foo/:bar",
    before : "called before any of the query or async stuff even",
    query : "CouchDB Map Reduce query runs the template as an xhr callback",
    async : "avoid using this. you call the same event as a callback with async-loaded data. probably better to just use another event. See the account and profile widgets for good examples of using non-ui events to trigger ui events based on logic.",
    mustache : "HTML template with Mustache replacement",
    data : "JavaScript function for massaging the data into shape for Mustache",
    after : "called after the template is rendered"
  };
  var codes = fields.map(function(f) {
    var val;
    if (typeof v[f] == "string") {
      val = v[f];
    } else {
      val = JSON.stringify(v[f]);
    }
    return {
      field : f,
      // value :val ? val.replace(/\{/g,'&#123;').replace(/\}/g","\\}") : "",
      value : val,
      urlval : encodeURIComponent(val),
      about : about[f],
      blank : !v[f]
    };
  }).sort(function(f) {
    return f.blank;
  });
  return codes;
}

exports.evently = function(ev) {
  var evs = [], fields = ["path","before","query","async","mustache", "data", "after"];
  var about = {
    path : "triggers this event with $.pathbinder. example: #/foo/:bar",
    before : "called before any of the query or async stuff even",
    query : "CouchDB Map Reduce query runs the template as an xhr callback",
    async : "avoid using this. you call the same event as a callback with async-loaded data. probably better to just use another event. See the account and profile widgets for good examples of using non-ui events to trigger ui events based on logic.",
    mustache : "HTML template with Mustache replacement",
    data : "JavaScript function for massaging the data into shape for Mustache",
    after : "called after the template is rendered"
  };
  $.forIn(ev, function(k2, v) {
    evs.push({
      event : k2,
      fields : fields.map(function(f) {
        var val;
        if (typeof v[f] == "string") {
          val = v[f];
        } else {
          val = JSON.stringify(v[f]);
        }
        return {
          field : f,
          value : val,
          about : about[f],
          blank : !v[f]
        };
      }).sort(function(f) {
        return f.blank;
      })
    });
  });
  return evs;
};