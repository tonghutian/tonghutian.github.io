$(document).ready(function() {
  $(".toggle-content").hide();

  $(".toggle-btn").click(function() {
    $(this).next(".toggle-content").toggle();
  });

  $("#collapse-all").click(function() {
    $(".toggle-content").hide();
  });

  $("#expand-all").click(function() {
    $(".toggle-content").show();
  });

  $("#toc-list a").click(function() {
    let link = $(this).get(0); 
    let targetId = link.href.split("#")[1]; 
    $("#" + targetId).next(".toggle-content").show();
  });
});