$("#reset_password_link_form").validate({
  rules: {
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    email: "Please enter a valid email"
  },
  submitHandler: function(form, event) {
    event.preventDefault();
    submitForm();
  }
});

function submitForm() {
  const user = {
    email: $("#email").val()
  };

  $.ajax({
    type: "POST",
    url: "/api/send_reset_password_link",
    data: JSON.stringify(user),
    contentType: "application/json",
    success: data => {
      console.log(data.message);
      $("#reset_password_link_form").hide();
      $(".message").html(data.message);
    },
    error: data => {
      console.log(data);
      $(".message").html(data.statusText);
    }
  });
}
