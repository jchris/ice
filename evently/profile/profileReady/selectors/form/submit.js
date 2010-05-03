function() {
  var form = this;
  var path = $("[name=message]", form).val();
  $.pathbinder.go("/edit/"+encodeURIComponent(path));
  return false;
};
