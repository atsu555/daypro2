$('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in');
    $('body').toggleClass('noscroll');
  });



  // 読み込んだらフェードアウト
  $(window).on('load',function () {
      // 消えるタイミングはお好みで
      $('.loading').delay(1000).fadeOut(1000);
      $('fadeIn_right').toggleClass('is-show');
  });
  // 10秒待っても読み込みが終わらない時は強制的にローディング画面をフェードアウト
  function stopload(){
      $('.loading').delay(1000).fadeOut(700);
  }
  setTimeout('stopload()',10000);

