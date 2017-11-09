
$(document).on("submit", "#search-button", function(e){
  e.preventDefault();
  var name = $("#input-field").val().trim();
  var newSummoner = {
    summoner: name
  }
  $.ajax({
    url: "/search",
    method: "get",
    body: newSummoner
  }).done(function(data){
    location.reload();
    console.log(data);  
  })
})

$(document).on("click", "#delete", function(e){
  e.preventDefault(); 
  var thisId = $(this).attr("data-id");
    
    $.ajax({
        url: "/api/articles/delete/" + thisId,
        method: "POST"
      })   
        .then(function(data) {
            location.reload();
        });
});

$(document).on("click", "#save", function(e){
  e.preventDefault();
  
  var thisId = $(this).attr("data-id");
  console.log("data-id: ", thisId);
  var saveValue =$(this).data("savevalue");
  console.log("save value: ", saveValue);
  
  var newSavedState = {
    saved: saveValue
  }

  $.ajax({
      method: "PUT",
      url: "/api/articles/save/" + thisId,
      body: newSavedState
    })
      .then(function(data) {
          location.reload();//this will reload the page so the article will populate the saved page section
      });
});
