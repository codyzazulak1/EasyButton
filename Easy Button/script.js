$(document).ready(function() {
  var audio = $(".easysound")[0];

  $("div").click(function() {
  	$(this).fadeOut('fast');
      $(this).fadeIn('fast');
      audio.play();
    });
});