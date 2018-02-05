$("#register_form").validate({
  rules: {
    username: "required",
    firstname: "required",
    lastname: "required",
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      minlength: 5
    },
    password_confirm: {
      required: true,
      minlength: 5,
      equalTo: "#password"
    }
  },
  messages: {
    username: "Please add a username",
    name: "Please enter your firstname",
    lastname: "Please enter your lastname",
    email: "Please enter a valid email",
    password: {
      required: "The password is required",
      minlength: "The min is 5 characters"
    },
    password_confirm: "Password is not the same :S"
  },
  submitHandler: function(form, event) {
    event.preventDefault();
    submitForm();
  }
});

function submitForm() {
  const user = {
    username: $("#username").val(),
    firstname: $("#firstname").val(),
    lastname: $("#lastname").val(),
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.ajax({
    type: "POST",
    url: "/api/register",
    data: JSON.stringify(user),
    contentType: "application/json",
    success: data => {
      window.location.href = "/";
    },
    error: data => {
      alert(data.statusText);
    }
  });
}
