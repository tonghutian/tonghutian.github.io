$(document).ready(function () {
  $(".toggle-content").hide();
  $(".toggle-btn").click(function () {
      $(this).next(".toggle-content").toggle();
  });
  $("#collapse-all").click(function () {
      $(".toggle-content").hide();
  });
  $("#expand-all").click(function () {
      $(".toggle-content").show();
  });
});
