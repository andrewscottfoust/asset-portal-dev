$("#add_asset_form").validate({
  rules: {
    filename: {
      required: true
    },
    name: "required",
    description: "required"
  },
  messages: {
    name: "Please add a name",
    description: "Please enter your description"
  },
  submitHandler: function(form, event) {
    event.preventDefault();
    submitForm();
  }
});

function submitForm() {
  var extentionsArray = ["jpg", "jpeg", "png", "gif", "ai", "psd", "doc", "docx", "rtf", "pdf", ".aif", ".aiff"];

  var filename = $("#filename")
    .val()
    .replace(/.*(\/|\\)/, "");
  var extension = filename
    .split(".");

  const asset = {
    filename: filename,
    name: $("#name").val(),
    description: $("#description").val(),
    type: extension[1],
    user: $(".container_register").attr("data-user")
  };

  if ($.inArray(extension[1], extentionsArray) != -1) {
    saveAsset(asset);
  } else {
    alert("Not a valid file type!");
  }
  
}

function saveAsset(asset) {
  $.ajax({
    type: "POST",
    url: "/api/add_asset",
    data: JSON.stringify(asset),
    contentType: "application/json",
    success: data => {
      window.location.href = "/admin";
    },
    error: data => {
      alert(data.statusText);
    }
  });
}
