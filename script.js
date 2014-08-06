$(document).ready(function() {
  var audio = $(".easysound")[0];

  $("div").click(function() {
    audio.play();
    $(this).fadeOut('fast');
    $(this).fadeIn('fast');
  });
});