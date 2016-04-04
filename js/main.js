$('.navmenu a').click( 
  function(){
    $('.hidden').fadeOut(500);
    $( $(this).attr('href') ).fadeIn(750);
  }
)

$('.btn-close').click(
  function(){
    $(this).closest('.content-box').fadeOut(500);
  }
)
