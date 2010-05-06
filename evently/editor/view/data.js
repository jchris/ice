function(e, params) {
  var ddoc = e.data.args[0], name = params.name;
  return {
    name : name,
    docid : ddoc._id
  }
};