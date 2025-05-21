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

/* This code makes the content auto expand when the users are taken to the texts by the table of contents */
  $("#toc-list a").click(function() {
    let link = $(this).get(0); 
    let targetId = link.href.split("#")[1]; 
    $("#" + targetId).next(".toggle-content").show();
  });
});