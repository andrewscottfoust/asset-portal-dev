let curDeleteID;
let curEditType;

$(".btn-delete-user").click(function(e) {
  e.preventDefault();
  curEditType = "user";
  curDeleteID = $(this).attr("rel");
  $("#deleteModal").modal();
});

$(".btn-delete-asset").click(function(e) {
  e.preventDefault();
  curEditType = "asset";
  curDeleteID = $(this).attr("rel");
  $("#deleteModal").modal();
});

$(".btn-confirm-delete").click(function(e) {
  e.preventDefault();
  deleteItem(curDeleteID);
});

function confirmDeleteModal(id) {
  $("#deleteModal").modal();
  $("#deleteButton").html(
    '<a class="btn btn-danger" onclick="deleteItem(' + id + ')">Delete</a>'
  );
}

function deleteItem(id) {
  const data = {
    id: id
  };
  let apiURL;

  switch (curEditType) {
    case "user":
      apiURL = "/api/delete_user";
      break;
    case "asset":
      apiURL = "/api/delete_asset";
      break;
    default:
  }

  $.ajax({
    type: "POST",
    url: apiURL,
    data: JSON.stringify(data),
    contentType: "application/json",
    success: data => {
      window.location.reload();
    },
    error: data => {
      console.log(data);
    }
  });
}
