$(document).ready(function () {
  $(".toggle-content").hide();

  $(".toggle-btn").click(function () {
      $(this).next(".toggle-content").toggle();
  });
});