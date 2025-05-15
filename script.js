$(document).ready(() => {
  $(".toggle-content").hide();

  $(".toggle-btn").click(function() {
    $(this).next(".toggle-content").toggle();
  });

  $("#collapse-all").click(() => $(".toggle-content").hide());

  $("#expand-all").click(() => $(".toggle-content").show());

  $("#toc-list a").click(function() {
    const targetId = $(this).attr("href");
    $(targetId).next(".toggle-content").show();
  });
});