function(e, params) {
  var events = [], ddoc = e.data.args[0], name = params.name;
  $.forIn(ddoc.evently[name], function(k, v) {
    events.push({
      event : k
    });
  });
  $.log(events)
  return {
    name : name,
    events : events,
    docid : ddoc._id
  }
};