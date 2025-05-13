$(document).ready(function() {
  $('.toggle-content').hide(); 

  $('.toggle-btn').click(function() {
    const targetId = $(this).attr('onclick').match(/'(.*?)'/)[1];
    $('#' + targetId).slideToggle();
  });
});
