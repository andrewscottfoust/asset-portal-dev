$("#login_form").on("submit", function(e) {
  e.preventDefault();

  const user = {
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.ajax({
    type: "POST",
    url: "/api/login",
    data: JSON.stringify(user),
    contentType: "application/json",
    success: data => {
      window.location.href = "/";
      alert("You are now logged in!");
    },
    error: data => {
      alert(data.statusText);
    }
  });
});
